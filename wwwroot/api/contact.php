<?php
/**
 * Megatec Contact Form Handler
 * Secure email submission with validation, rate limiting, and spam protection
 *
 * @version 2.0
 */

// Prevent direct script access and set headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Load environment variables
$envFile = dirname(__DIR__, 2) . '/.env';
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        if (strpos($line, '=') !== false) {
            list($name, $value) = explode('=', $line, 2);
            $_ENV[trim($name)] = trim($value);
        }
    }
}

// Configuration with defaults
$config = [
    'smtp_host' => $_ENV['SMTP_HOST'] ?? 'smtp.office365.com',
    'smtp_port' => (int)($_ENV['SMTP_PORT'] ?? 587),
    'smtp_username' => $_ENV['SMTP_USERNAME'] ?? '',
    'smtp_password' => $_ENV['SMTP_PASSWORD'] ?? '',
    'company_domain' => $_ENV['COMPANY_DOMAIN'] ?? 'megatec.co.il',
    'mail_from_name' => $_ENV['MAIL_FROM_NAME'] ?? 'Megatec Website',
    'mail_from_email' => $_ENV['MAIL_FROM_EMAIL'] ?? '',
    'mail_to_default' => $_ENV['MAIL_TO_DEFAULT'] ?? '',
    'mail_to_sales' => $_ENV['MAIL_TO_SALES'] ?? '',
    'mail_to_training' => $_ENV['MAIL_TO_TRAINING'] ?? '',
    'turnstile_secret' => $_ENV['TURNSTILE_SECRET_KEY'] ?? '',
    'rate_limit_max' => (int)($_ENV['RATE_LIMIT_MAX_REQUESTS'] ?? 5),
    'rate_limit_window' => (int)($_ENV['RATE_LIMIT_WINDOW_SECONDS'] ?? 3600),
    'confirmation_enabled' => ($_ENV['EMAIL_CONFIRMATION_ENABLED'] ?? 'false') === 'true',
    'debug_mode' => ($_ENV['DEBUG_MODE'] ?? 'false') === 'true',
];

// Validate configuration
if (empty($config['smtp_username']) || empty($config['smtp_password'])) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server configuration error']);
    exit;
}

/**
 * Sanitize and validate input
 */
function sanitizeInput($input, $type = 'string') {
    if ($type === 'email') {
        return filter_var(trim($input), FILTER_SANITIZE_EMAIL);
    }
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

/**
 * Validate email format and domain
 */
function validateEmail($email) {
    // Basic format validation
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return ['valid' => false, 'reason' => 'Invalid email format'];
    }

    // Extract domain
    $parts = explode('@', $email);
    if (count($parts) !== 2) {
        return ['valid' => false, 'reason' => 'Invalid email format'];
    }
    $domain = strtolower($parts[1]);

    // Check DNS MX records
    if (!checkdnsrr($domain, 'MX') && !checkdnsrr($domain, 'A')) {
        return ['valid' => false, 'reason' => 'Email domain does not exist'];
    }

    // Check for disposable email domains
    $disposableDomains = [
        'tempmail.com', 'throwaway.com', 'guerrillamail.com', 'mailinator.com',
        '10minutemail.com', 'temp-mail.org', 'fakeinbox.com', 'trashmail.com',
        'tempinbox.com', 'dispostable.com', 'yopmail.com', 'getairmail.com',
        'sharklasers.com', 'guerrillamailblock.com', 'pokemail.net',
        'spam4.me', 'grr.la', 'maildrop.cc', 'mailnesia.com', 'mintemail.com',
    ];

    if (in_array($domain, $disposableDomains)) {
        return ['valid' => false, 'reason' => 'Disposable email addresses are not allowed'];
    }

    // Classify email type
    $personalDomains = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'live.com',
        'icloud.com', 'me.com', 'aol.com', 'msn.com', 'protonmail.com',
        'mail.com', 'gmx.com', 'zoho.com', 'yandex.com', 'mail.ru',
    ];

    $type = in_array($domain, $personalDomains) ? 'personal' : 'corporate';

    return ['valid' => true, 'type' => $type, 'domain' => $domain];
}

/**
 * Rate limiting using file-based storage
 */
function checkRateLimit($ip, $maxRequests, $windowSeconds) {
    $rateLimitDir = sys_get_temp_dir() . '/megatec_ratelimit';
    if (!is_dir($rateLimitDir)) {
        mkdir($rateLimitDir, 0755, true);
    }

    $ipHash = md5($ip);
    $file = $rateLimitDir . '/' . $ipHash . '.json';
    $now = time();

    $data = ['requests' => [], 'blocked_until' => 0];
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true) ?: $data;
    }

    // Check if blocked
    if ($data['blocked_until'] > $now) {
        return ['allowed' => false, 'retry_after' => $data['blocked_until'] - $now];
    }

    // Filter old requests outside the window
    $data['requests'] = array_filter($data['requests'], function($timestamp) use ($now, $windowSeconds) {
        return $timestamp > ($now - $windowSeconds);
    });

    // Check if limit exceeded
    if (count($data['requests']) >= $maxRequests) {
        $data['blocked_until'] = $now + $windowSeconds;
        file_put_contents($file, json_encode($data));
        return ['allowed' => false, 'retry_after' => $windowSeconds];
    }

    // Add current request
    $data['requests'][] = $now;
    file_put_contents($file, json_encode($data));

    return ['allowed' => true, 'remaining' => $maxRequests - count($data['requests'])];
}

/**
 * Verify Cloudflare Turnstile token
 */
function verifyTurnstile($token, $secretKey, $ip) {
    if (empty($secretKey)) {
        return ['success' => true]; // Skip if not configured
    }

    $response = file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'content' => http_build_query([
                'secret' => $secretKey,
                'response' => $token,
                'remoteip' => $ip,
            ]),
            'timeout' => 10,
        ],
    ]));

    if ($response === false) {
        return ['success' => false, 'error' => 'Turnstile verification failed'];
    }

    return json_decode($response, true);
}

/**
 * Get recipient based on inquiry category
 */
function getRecipient($category, $config) {
    $recipients = [
        'sales' => $config['mail_to_sales'],
        'training' => $config['mail_to_training'],
        'general' => $config['mail_to_default'],
    ];

    $recipient = $recipients[$category] ?? $config['mail_to_default'];

    // Validate recipient belongs to company domain
    if (!empty($recipient)) {
        $parts = explode('@', $recipient);
        if (count($parts) === 2 && $parts[1] === $config['company_domain']) {
            return $recipient;
        }
    }

    return $config['mail_to_default'];
}

// === MAIN EXECUTION ===

// Get client IP
$clientIp = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['HTTP_X_REAL_IP'] ?? $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$clientIp = explode(',', $clientIp)[0]; // Get first IP if multiple

// Rate limiting
$rateLimitResult = checkRateLimit($clientIp, $config['rate_limit_max'], $config['rate_limit_window']);
if (!$rateLimitResult['allowed']) {
    http_response_code(429);
    header('Retry-After: ' . $rateLimitResult['retry_after']);
    echo json_encode([
        'success' => false,
        'error' => 'Too many requests. Please try again later.',
        'retry_after' => $rateLimitResult['retry_after'],
    ]);
    exit;
}

// Get and sanitize input
$name = sanitizeInput($_POST['name'] ?? '');
$email = sanitizeInput($_POST['email'] ?? '', 'email');
$subject = sanitizeInput($_POST['subject'] ?? 'Website Inquiry');
$message = sanitizeInput($_POST['message'] ?? '');
$category = sanitizeInput($_POST['category'] ?? 'general');
$turnstileToken = $_POST['cf-turnstile-response'] ?? '';

// Validate required fields
$errors = [];
if (empty($name) || strlen($name) < 2) {
    $errors['name'] = 'Please enter your name (at least 2 characters)';
}
if (empty($email)) {
    $errors['email'] = 'Please enter your email address';
}
if (empty($message) || strlen($message) < 10) {
    $errors['message'] = 'Please enter a message (at least 10 characters)';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Validate email
$emailValidation = validateEmail($email);
if (!$emailValidation['valid']) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'errors' => ['email' => $emailValidation['reason']],
    ]);
    exit;
}

// Verify Turnstile (if configured)
if (!empty($config['turnstile_secret'])) {
    $turnstileResult = verifyTurnstile($turnstileToken, $config['turnstile_secret'], $clientIp);
    if (!($turnstileResult['success'] ?? false)) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'error' => 'Security verification failed. Please try again.',
        ]);
        exit;
    }
}

// Get recipient
$recipient = getRecipient($category, $config);
if (empty($recipient)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server configuration error']);
    exit;
}

// Build email
$emailType = $emailValidation['type'] ?? 'unknown';
$emailDomain = $emailValidation['domain'] ?? '';

$emailBody = <<<EOT
New Contact Form Submission
===========================

Name: {$name}
Email: {$email}
Email Type: {$emailType}
Email Domain: {$emailDomain}
Category: {$category}
Subject: {$subject}

Message:
---------
{$message}

---
Submitted: {$now_formatted}
IP Address: {$clientIp}
EOT;

$now_formatted = date('Y-m-d H:i:s T');
$emailBody = str_replace('{$now_formatted}', $now_formatted, $emailBody);

// Prepare email headers with proper Reply-To
$headers = [
    'From' => "{$config['mail_from_name']} <{$config['mail_from_email']}>",
    'To' => $recipient,
    'Reply-To' => "{$name} <{$email}>",
    'Subject' => "[Website] {$subject}",
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'Megatec Website Contact Form',
];

// Load PEAR Mail library
require_once dirname(__DIR__) . '/Mail.php';

// Create SMTP connection
$smtp = Mail::factory('smtp', [
    'host' => $config['smtp_host'],
    'port' => $config['smtp_port'],
    'auth' => true,
    'username' => $config['smtp_username'],
    'password' => $config['smtp_password'],
]);

// Send email
$result = $smtp->send($recipient, $headers, $emailBody);

if (PEAR::isError($result)) {
    if ($config['debug_mode']) {
        error_log('Email send error: ' . $result->getMessage());
    }
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Failed to send message. Please try again later.',
    ]);
    exit;
}

// Send confirmation email to user (if enabled)
$confirmationSent = false;
if ($config['confirmation_enabled']) {
    $confirmationBody = <<<EOT
Dear {$name},

Thank you for contacting Megatec Advanced Technologies.

We have received your message and will respond as soon as possible.

Your message details:
- Subject: {$subject}
- Category: {$category}
- Submitted: {$now_formatted}

If you did not submit this contact form, please disregard this email.

Best regards,
Megatec Advanced Technologies
www.megatec.co.il
EOT;

    $confirmationHeaders = [
        'From' => "{$config['mail_from_name']} <{$config['mail_from_email']}>",
        'To' => "{$name} <{$email}>",
        'Subject' => "Thank you for contacting Megatec",
        'MIME-Version' => '1.0',
        'Content-Type' => 'text/plain; charset=UTF-8',
        'X-Mailer' => 'Megatec Website Contact Form',
    ];

    $confirmResult = $smtp->send($email, $confirmationHeaders, $confirmationBody);
    $confirmationSent = !PEAR::isError($confirmResult);
}

// Success response
echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your message has been sent successfully.',
    'email_type' => $emailType,
    'confirmation_sent' => $confirmationSent,
]);
