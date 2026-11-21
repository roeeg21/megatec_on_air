<?php 

require_once "Mail.php"; 

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject2 = $_POST['subject'];
 
$from = $name." <igorm@megatec.co.il>"; 
// $to = "Igor Mishinkin <igorm@megatec.co.il>, Menachem <info@megatec.co.il>" ; 
$to = "Igor Mishinkin <igorm@megatec.co.il>" ; 
$subject = "Contact Request!"; $body = "\nMessage: ".$message."\nEmail: ".$email;  
$host = "outlook.office365.com"; 
$username = "igorm@megatec.co.il"; 
$password = "Ghjtyu567";  
$headers = array ('From' => $from,   'To' => $to,   'Subject' => $subject); 
$smtp = Mail::factory('smtp',   array ('host' => $host,     'auth' => true,     'username' => $username,     'password' => $password)); 





$mail = $smtp->send($to, $headers, $body);


echo '<script type="text/javascript">'; 
	echo 'alert("Thank You! We will contact you as soon as possible");'; 
	echo 'window.location.href = "index.html";';
	echo '</script>';



/*
if (PEAR::isError($mail)) {   
	echo '<script type="text/javascript">'; 
	echo 'alert("Error!");'; 
	echo 'window.location.href = "index.html";';
	echo '</script>';
} 
else {   
	echo '<script type="text/javascript">'; 
	echo 'alert("Thank You! We will contact you as soon as possible");'; 
	echo 'window.location.href = "index.html";';
	echo '</script>';  } 
	
	
*/	
?>
