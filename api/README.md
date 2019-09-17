# Open Social Enterprise template

Use this template for new Enterprise projects.

How to use:

1. Create a new repository in BitBucket.

2. Clone this repository into a new directory and make the following changes:

   2.1. Replace rfe with the shortcode of your new project in:

   - scripts/rfe
   - docker-compose.yml
   - docker-compose-ci.yml
   - shippable.yml
   - .platform.app.yaml
   - html/modules/features/rfe_core
   - html/modules/features/rfe_orchestrator
   - html/modules/features/rfe_helper
   - tests/behat/features/config/base_configuration_enterprise.yml
   - tests/behat/features/bootstrap/rfeFeatureContext.php
   - tests/behat/features/bootstrap/rfeDrupalContext.php
   - Change the namespaces for the two files above in composer.json

     2.2. Change README

3. Push the code to the newly created repository.

4. Activate:

   - Shippable integration
   - Couple with a new platform.sh project (don't forget to give the new Public key access to the repositories from the composer.json afterwards)

5. Now go and develop this your custom Open Social site.

   Remember you can add custom modules, themes etc by placing this in either html/modules/custom or html/themes/custom. You can add new contrib modules to the composer.json.

   The deploy hooks are defined in .platform.app.yaml and may be changed according to your needs.

   Changes regarding Behat configuration may be made in: tests/behat/config/stability-social-enterprise.yml and tests/behat/config/stability-social-core.yml. By default it will only run one test from the distribution and one from the enterprise suite.
