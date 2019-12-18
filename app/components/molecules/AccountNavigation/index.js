import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import {API_URL} from '../../../utils/constants';
import NavigationDropdown from '../NavigationDropdown';
import {deviceMinWidth} from '../../../utils/device';
import ListDivider from '../../atoms/ListDivider';
import DropdownHeader from '../../atoms/DropdownHeader';
import Avatar from '../../atoms/Avatar';
import {useUser, useDispatchUser} from '../../auth/userContext';
import {removeCookie} from '../../../utils/cookie';
import {withTranslation} from '../../../i18n';

const AccountNavigationWrapper = styled.ul`
  display: flex;
  margin: 0;
  height: 3.125rem;
  padding: 0;
  list-style-type: none;

  li {
    justify-content: center;
    display: flex;
    width: 3.125rem;
    height: 50px;
  }

  li > * {
    align-self: center;
    display: flex;
    cursor: pointer;
    text-decoration: none;
  }

  & > div > li > a,
  & > div > li > a > img {
    display: block;
    height: 100%;
  }

  @media ${deviceMinWidth.tablet} {
    margin-right: 0.9375rem;
    li {
      width: 2.75rem;
    }
  }
`;

const HeaderAvatar = styled(Avatar)`
  border: 2px solid transparent;
  background-color: white;
`;

const DesktopButtons = styled.div`
  display: none;

  @media ${deviceMinWidth.tablet} {
    display: flex;
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
  margin-right: 0.75rem;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    padding: 0 0 0 0.9375rem;
    margin-left: 0.9375rem;
  }

  ul li a {
    white-space: nowrap;
    color: inherit;
  }

  @media ${deviceMinWidth.tablet} {
    display: flex;
  }
`;

const AccountNavigation = ({t}) => {
  const user = useUser();
  const dispatch = useDispatchUser();

  const logout = () => {
    removeCookie('token');
    removeCookie('username');
    removeCookie('id');
    removeCookie('avatar');
    dispatch({type: 'LOGOUT'});
    Router.push('/');
  };

  // if the user does not have an avatar use the placeholder
  // set the user's avatar as the one obtained from the API
  const accountImg =
    user.avatar === '' ? (
      <img src="/static/account.svg" width="24px" alt="default avatar" />
    ) : (
      <HeaderAvatar
        src={API_URL + user.avatar}
        width="20px"
        alt="user avatar"
      />
    );

  return (
    <AccountNavigationWrapper>
      {/* if the user is not logged in display the login + signup links */}
      {!user.isLoggedIn && (
        <React.Fragment>
          <MobileWrapper>
            <NavigationDropdown
              button={
                <img
                  src="/static/account.svg"
                  width="24px"
                  alt="account menu"
                />
              }
            >
              <ul>
                <li>
                  <Link href="/user/register">
                    <a>{t('sign-up')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/user/login">
                    <a>{t('log-in')}</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
          </MobileWrapper>
          <DesktopWrapper>
            <ul>
              <li>
                <Link href="/user/register">
                  <a>{t('sign-up')}</a>
                </Link>
              </li>
              <li>
                <Link href="/user/login">
                  <a>{t('log-in')}</a>
                </Link>
              </li>
            </ul>
          </DesktopWrapper>
        </React.Fragment>
      )}

      {/* if the user is logged in display the links regarding the users account */}
      {user.isLoggedIn && (
        <React.Fragment>
          <DesktopButtons>
            <NavigationDropdown
              button={
                <img
                  src="/static/add.svg"
                  width="20px"
                  alt="add content button"
                />
              }
              rightAlign={true}
            >
              <ul>
                <li>
                  <Link href="/node/add/event">
                    <a>{t('new-event')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/node/add/topic">
                    <a>{t('new-topic')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/node/add/page">
                    <a>{t('new-page')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/group/add">
                    <a>{t('new-group')}</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
            <li>
              <Link href="/user/groups">
                <a>
                  <img src="/static/group.svg" width="20px" alt="groups" />
                </a>
              </Link>
            </li>
            <NavigationDropdown
              button={
                <img
                  src="/static/private message_no_new.svg"
                  width="20px"
                  alt="no new private message icon"
                />
              }
              rightAlign={true}
            />
            <NavigationDropdown
              button={
                <img
                  src="/static/notification_no new.svg"
                  width="20px"
                  alt="no new notification icon"
                />
              }
              rightAlign={true}
            >
              <ul>
                <DropdownHeader>
                  {t('notification-centre')}
                  <Link href="/notifications">
                    <a>{t('all-notifications')}</a>
                  </Link>
                </DropdownHeader>
              </ul>
            </NavigationDropdown>
          </DesktopButtons>
          <NavigationDropdown button={accountImg} rightAlign={true}>
            <ul>
              <DropdownHeader>
                {t('signed-in-as')}
                <Link href={`/user?id=${user.id}`}>
                  <a>{user.username}</a>
                </Link>
              </DropdownHeader>
              <ListDivider />
              <li>
                <Link href={`/user?id=${user.id}`}>
                  <a>{t('my-stream')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/userevents?id=${user.id}`}
                  as={`/user?id=${user.id}/events`}
                >
                  <a>{t('my-events')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/usertopics?id=${user.id}`}
                  as={`/user?id=${user.id}/topics`}
                >
                  <a>{t('my-topics')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/usergroups?id=${user.id}`}
                  as={`/user?id=${user.id}/groups`}
                >
                  <a>{t('my-groups')}</a>
                </Link>
              </li>
              <li>
                <Link
                  href={`/userinformation?id=${user.id}`}
                  as={`/user?id=${user.id}/information`}
                >
                  <a>{t('my-information')}</a>
                </Link>
              </li>
              <ListDivider />
              <li>
                <Link href="/following">
                  <a>{t('following')}</a>
                </Link>
              </li>
              <ListDivider />
              <li>
                <Link href="/settings">
                  <a>{t('settings')}</a>
                </Link>
              </li>
              <li>
                <Link href="/editprofile">
                  <a>{t('edit-profile')}</a>
                </Link>
              </li>
              <ListDivider />
              <li onClick={logout}>
                <a>{t('log-out')}</a>
              </li>
            </ul>
          </NavigationDropdown>
        </React.Fragment>
      )}
    </AccountNavigationWrapper>
  );
};

AccountNavigation.propTypes = {
  t: PropTypes.func,
};

export default withTranslation('header')(AccountNavigation);
