import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { API_URL } from "../../../utils/constants";
import NavigationDropdown from "../NavigationDropdown";
import { deviceMinWidth } from "../../../utils/device";
import { withTranslation } from "../../../i18n";

// The right side of the header's navigation portion. Contains any navigation regarding the user's account
const StyledHr = styled.hr`
  margin: 0 0.625rem 0 0.625rem;
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;

  @media ${deviceMinWidth.tablet} {
    margin: 0;
  }
`;

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

const ProfileImage = styled.img`
  border-radius: 50%;
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

const AccountNavigation = ({
  isAuthenticated,
  deauthenticate,
  username,
  profileImage,
  t
}) => {
  // if the user does not have a profile image use the placeholder
  if (profileImage == "") {
    var accountImg = <img src="/static/account.svg" width="24px" />;
  } else {
    // set the user's profile image as the one obtained from the API
    var accountImg = <ProfileImage src={API_URL + profileImage} width="20px" />;
  }
  return (
    <AccountNavigationWrapper>
      {/* if the user is not logged in display the login + signup links */}
      {!isAuthenticated && (
        <React.Fragment>
          <MobileWrapper>
            <NavigationDropdown
              button={<img src="/static/account.svg" width="24px" />}
            >
              <ul>
                <li>
                  <Link href="/signup">
                    <a>{t("sign up")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>{t("log in")}</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
          </MobileWrapper>
          <DesktopWrapper>
            <ul>
              <li>
                <Link href="/signup">
                  <a>{t("sign up")}</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>{t("log in")}</a>
                </Link>
              </li>
            </ul>
          </DesktopWrapper>
        </React.Fragment>
      )}

      {/* if the user is logged in display the links regarding the users account */}
      {isAuthenticated && (
        <React.Fragment>
          <DesktopButtons>
            <NavigationDropdown
              button={<img src="/static/add.svg" width="20px" />}
              rightAlign={true}
            >
              <ul>
                <li>
                  <Link href="/node/add/event">
                    <a>New Event</a>
                  </Link>
                </li>
                <li>
                  <Link href="/node/add/topic">
                    <a>New Topic</a>
                  </Link>
                </li>
                <li>
                  <Link href="/node/add/page">
                    <a>New Page</a>
                  </Link>
                </li>
                <li>
                  <Link href="/group/add">
                    <a>New Group</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
            <li>
              <Link href="/user/groups">
                <a>
                  <img src="/static/group.svg" width="20px" />
                </a>
              </Link>
            </li>
            <NavigationDropdown
              button={
                <img src="/static/private message_no_new.svg" width="20px" />
              }
              rightAlign={true}
            ></NavigationDropdown>
            <NavigationDropdown
              button={
                <img src="/static/notification_no new.svg" width="20px" />
              }
              rightAlign={true}
            >
              <ul>
                <p>Notification Centre</p>
                <li>
                  <Link href="/notifications">
                    <a>All notifications</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
          </DesktopButtons>
          <NavigationDropdown button={accountImg} rightAlign={true}>
            <ul>
              <p>Signed in as</p>
              <li>
                <Link href="/profile">
                  <a>{username}</a>
                </Link>
              </li>
              <StyledHr></StyledHr>
              <li>
                <Link href="/stream">
                  <a>My stream</a>
                </Link>
              </li>
              <li>
                <Link href="/myevents">
                  <a>My events</a>
                </Link>
              </li>
              <li>
                <Link href="/mytopics">
                  <a>My topics</a>
                </Link>
              </li>
              <li>
                <Link href="/mygroups">
                  <a>My groups</a>
                </Link>
              </li>
              <li>
                <Link href="/myinformation">
                  <a>My information</a>
                </Link>
              </li>
              <StyledHr></StyledHr>
              <li>
                <Link href="/following">
                  <a>Following</a>
                </Link>
              </li>
              <StyledHr></StyledHr>
              <li>
                <Link href="/settings">
                  <a>Settings</a>
                </Link>
              </li>
              <li>
                <Link href="/editprofile">
                  <a>Edit profile</a>
                </Link>
              </li>
              <StyledHr></StyledHr>
              <li onClick={deauthenticate}>
                <a>Log out</a>
              </li>
            </ul>
          </NavigationDropdown>
        </React.Fragment>
      )}
    </AccountNavigationWrapper>
  );
};

AccountNavigation.defaultProps = {};

AccountNavigation.propTypes = {};

export default withTranslation("header")(AccountNavigation);
