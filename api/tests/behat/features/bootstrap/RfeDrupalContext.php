<?php

namespace Drupal\rfe\Behat;

use Drupal\social\Behat\SocialDrupalContext;

/**
 * Enterprise specific helpers for Behat tests.
 */
class rfeDrupalContext extends SocialDrupalContext {

  /**
   * {@inheritdoc}
   */
  public function userCreate($user) {
    $this->dispatchHooks('BeforeUserCreateScope', $user);
    $this->parseEntityFields('user', $user);
    $this->parseEntityFields('profile', $user);
    $this->getDriver()->userCreate($user);
    $this->dispatchHooks('AfterUserCreateScope', $user);
    $this->userManager->addUser($user);

    return $user;
  }

}
