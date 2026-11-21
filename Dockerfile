FROM php:8.1-apache

# Install required PHP extensions for PEAR Mail
RUN apt-get update && apt-get install -y \
    libssl-dev \
    && docker-php-ext-install sockets \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache modules
RUN a2enmod rewrite

# Copy website files to Apache document root
COPY wwwroot/ /var/www/html/

# Set proper permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Expose port 80
EXPOSE 80

# Start Apache in foreground
CMD ["apache2-foreground"]
