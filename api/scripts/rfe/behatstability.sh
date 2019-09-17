#!/usr/bin/env bash
BEHAT_PARAMS='{"gherkin" : {"cache" : null}}'
ENTERPRISE_PROJECT_FOLDER=/var/www/tests/behat
/var/www/vendor/bin/behat --config $ENTERPRISE_PROJECT_FOLDER/config/stability-social-enterprise.yml --suite "enterprise" --colors -f pretty -o std -f junit -o /var/www/shippable/testresults/
EXIT=$?;
/var/www/vendor/bin/behat --config $ENTERPRISE_PROJECT_FOLDER/config/stability-social-core.yml --suite "distribution" --colors -f pretty -o std -f junit -o /var/www/shippable/testresults/
EXIT2=$?;
if [[ $EXIT != 0 ]]; then exit $EXIT; fi
if [[ $EXIT2 != 0 ]]; then exit $EXIT2; fi
