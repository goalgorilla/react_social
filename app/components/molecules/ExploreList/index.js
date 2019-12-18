import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {withTranslation} from '../../../i18n';

const ExploreList = ({t}) => (
  <ul>
    <li>
      <Link href="/explore">
        <a>{t('community')}</a>
      </Link>
    </li>
    <li>
      <Link href="/all-groups">
        <a>{t('all-groups')}</a>
      </Link>
    </li>
    <li>
      <Link href="/community-events">
        <a>{t('all-events')}</a>
      </Link>
    </li>
    <li>
      <Link href="/all-topics">
        <a>{t('all-topics')}</a>
      </Link>
    </li>
    <li>
      <Link href="/all-members">
        <a>{t('all-members')}</a>
      </Link>
    </li>
  </ul>
);

ExploreList.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('header')(ExploreList);
