import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { API } from "../../../config";
import NavigationDropdown from "../NavigationDropdown";
import { deviceMinWidth } from "../../../utils/device";

// The right side of the header's navigation portion. Contains any navigation regarding the user's account
const StyledHr = styled.hr`
  margin: 0 10px 0 10px;
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;
`;

const AccountNavigationWrapper = styled.ul`
  display: flex;
  margin: 0;
  height: 50px;
  padding: 0;
  list-style-type: none;

  li {
    justify-content: center;
    display: flex;
    width: 50px;
    height: 50px;
  }

  li > a {
    align-self: center;
    display: flex;
    cursor: pointer;
    text-decoration: none;
  }

  @media ${deviceMinWidth.tablet} {
    margin-right: 15px;
    li {
      width: 44px;
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
  margin-right: 12.5px;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    padding: 0 0 0 15px;
    margin-left: 15px;
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
  profileImage
}) => {
  // if the user does not have a profile image use the placeholder
  if (profileImage == "") {
    var accountImg = <img src="/static/account.svg" width="24px" />;
  } else {
    // set the user's profile image as the one obtained from the API
    var accountImg = <ProfileImage src={API + profileImage} width="20px" />;
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
                    <a>Sign up</a>
                  </Link>
                </li>
                <li>
                  <Link href="/login">
                    <a>Log in</a>
                  </Link>
                </li>
              </ul>
            </NavigationDropdown>
          </MobileWrapper>
          <DesktopWrapper>
            <ul>
              <li>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Log in</a>
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
            ></NavigationDropdown>
            <NavigationDropdown
              button={<img src="/static/group.svg" width="20px" />}
            ></NavigationDropdown>
            <NavigationDropdown
              button={
                <img src="/static/private message_no_new.svg" width="20px" />
              }
            ></NavigationDropdown>
            <NavigationDropdown
              button={
                <img src="/static/notification_no new.svg" width="20px" />
              }
            ></NavigationDropdown>
          </DesktopButtons>
          <NavigationDropdown button={accountImg}>
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

export default AccountNavigation;
