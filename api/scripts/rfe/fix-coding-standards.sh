#!/bin/sh

PHPCS=/var/www/vendor/bin/phpcs;
PHPCBF=/var/www/vendor/bin/phpcbf;

# Set some configurations.
# @todo add this to the Dockerfile at some point and remove the ignore flags.
${PHPCS} --config-set installed_paths /var/www/vendor/drupal/coder/coder_sniffer
${PHPCS} --config-set ignore_errors_on_exit 1
${PHPCS} --config-set ignore_warnings_on_exit 1

# Run PHP Code Sniffer.
echo "----- 1.1. Automatically fix Drupal coding standards on project modules -----"
${PHPCBF} $REPORT --standard=Drupal --extensions=php,module,inc,install,test,profile,theme /var/www/html/modules/features
echo "----- 1.2. Automatically fix Drupal best practices on project modules -------"
${PHPCBF} $REPORT --standard=DrupalPractice --extensions=php,module,inc,install,test,profile,theme /var/www/html/modules/features
# echo "----- 2.1. Automatically fix Drupal coding standards on project theme -----"
# ${PHPCBF} $REPORT --standard=Drupal --extensions=php,module,inc,install,test,profile,theme /var/www/html/themes/custom
# echo "----- 2.2. Automatically fix Drupal best practices on project theme -------"
# ${PHPCBF} $REPORT --standard=DrupalPractice --extensions=php,module,inc,install,test,profile,theme /var/www/html/themes/custom
