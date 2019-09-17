#!/usr/bin/env bash

# Install specific ENTP features.
cd /var/www/html/;

LOCAL=$1
NFS=$2
DEV=$3

bash /var/www/scripts/social/install/install_script.sh $1 $2 $3

bash /var/www/scripts/enterprise/install_settings.sh

sleep 5

cd /var/www/html/;

cd /var/www/html/;
drush en entp_orchestrator --yes
drush cc drush
drush -y fra --bundle=entp
drush -y entup
