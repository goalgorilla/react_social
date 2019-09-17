#!/bin/sh

REPORT=--report=summary

if [ ${1:-"summary"} = "full" ]; then
  REPORT=--report-full
fi

PHPCS=/var/www/vendor/bin/phpcs;

# Set some configurations.
# @todo add this to the Dockerfile at some point and remove the ignore flags.
${PHPCS} --config-set installed_paths /var/www/vendor/drupal/coder/coder_sniffer
${PHPCS} --config-set ignore_errors_on_exit 1
${PHPCS} --config-set ignore_warnings_on_exit 1

# Run PHP Code Sniffer.
echo "----- 1.1. Check Drupal coding standards on project modules -----"
${PHPCS} $REPORT --standard=Drupal --colors --extensions=php,module,inc,install,test,profile,theme /var/www/html/modules/features
echo "----- 1.2. Check Drupal best practices on project modules -------"
${PHPCS} $REPORT --standard=DrupalPractice --colors --extensions=php,module,inc,install,test,profile,theme /var/www/html/modules/features
# echo "----- 2.1. Check Drupal coding standards on project theme -----"
# ${PHPCS} $REPORT --standard=Drupal --colors --extensions=php,module,inc,install,test,profile,theme /var/www/html/themes/custom
# echo "----- 2.2. Check Drupal best practices on project theme -------"
# ${PHPCS} $REPORT --standard=DrupalPractice --colors --extensions=php,module,inc,install,test,profile,theme /var/www/html/themes/custom
