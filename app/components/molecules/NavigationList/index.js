import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavigationDropdown from '../NavigationDropdown';
import LanguageList from '../LanguageList';
import ExploreList from '../ExploreList';
import {deviceMinWidth, deviceMaxWidth} from '../../../utils/device';
import {withTranslation} from '../../../i18n';
import SearchBar from '../SearchBar';

// This NavigationList component contains the list of links the user can use to traverse the site. It is used in the header.
const NavBar = styled.ul`
  display: flex;
  margin: 0;
  width: 100%;
  height: 50px;
  padding: 0;
  list-style-type: none;

  li {
    justify-content: center;
    display: flex;
    min-width: 50px;
    height: 50px;
  }

  li > a {
    align-self: center;
    height: 100%;
    display: block;
    cursor: pointer;
    padding: 0 0.6125rem 0 0.6125rem;
    text-decoration: none;
  }

  &:li > a {
    line-height: 50px;
  }

  li > a > img {
    height: 100%;
    vertical-align: middle;
  }

  @media ${deviceMaxWidth.tablet} {
    div:first-child > div > li {
      background: ${props => props.theme.color.background.secondary};
    }
  }
`;

const MobileWrapper = styled.div`
  display: flex;
  @media ${deviceMinWidth.tablet} {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  padding-left: 0.9375rem;

  & > ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  & > ul > li {
    align-items: center;
    display: flex;
    width: 100%;
  }

  & > ul > li > a {
    display: block;
    height: 100%;
    line-height: 50px;
    color: inherit;
    font-weight: ${props => props.theme.font.weight.bold} !important;
  }

  & > ul > li > div {
    width: 100%;
  }

  @media ${deviceMinWidth.tablet} {
    display: flex;
  }
`;

const NavigationList = ({t}) => {
  return (
    <NavBar>
      {/* Mobile NavList */}
      <MobileWrapper>
        {/* Mobile translation button & dropdown */}
        <NavigationDropdown
          button={
            <img
              src="/static/translate.svg"
              width="20px"
              alt="translation button"
            />
          }
        >
          <ul>
            <SearchBar placeholder={t('language-search-placeholder')} />
            <LanguageList />
          </ul>
        </NavigationDropdown>
        {/* Mobile hamburger button & dropdown */}
        <NavigationDropdown
          button={
            <img src="/static/hamburger.svg" width="20px" alt="mobile menu" />
          }
        >
          <ul>
            <li>
              <Link href="/">
                <a>{t('home')}</a>
              </Link>
            </li>
            {/* Nested explore dropdown inside hamburger menu */}
            <NavigationDropdown
              title={
                <li>
                  <a>
                    {t('explore')}
                    <img
                      src="/static/dropdown.svg"
                      width="20px"
                      alt="dropdown caret"
                    />
                  </a>
                </li>
              }
            >
              <ExploreList />
            </NavigationDropdown>
          </ul>
        </NavigationDropdown>
      </MobileWrapper>
      {/* Desktop NavList */}
      <DesktopWrapper>
        <ul>
          <li>
            <Link href="/">
              <a>{t('home')}</a>
            </Link>
          </li>
          {/* Desktop explore dropdown */}
          <NavigationDropdown button={t('explore')}>
            <ExploreList />
          </NavigationDropdown>
        </ul>
      </DesktopWrapper>
      {/* Search button */}
      <NavigationDropdown
        button={<img src="/static/search.svg" width="24px" alt="search icon" />}
      />
    </NavBar>
  );
};

NavigationList.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('header')(NavigationList);
