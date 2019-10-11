import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";

const StyledHr = styled.hr`
  margin: 0 10px 0 10px;
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;
`;

const NavBar = styled.ul`
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
    font-size: ${props => props.theme.font.size.mobile.default};
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.color.text.light};
    text-decoration: none;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: white;
`;

const AccountNavigation = ({
  isAuthenticated,
  deauthenticate,
  username,
  profileImage
}) => {
  return (
    <NavBar>
      {!isAuthenticated && (
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
      )}

      {isAuthenticated && (
        <NavigationDropdown
          button={
            <ProfileImage
              src={`https://api.feature-rfe-25-5tikd6i-jmqq2w45dtvdy.eu-4.platformsh.site${profileImage}`}
              width="20px"
            />
          }
        >
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
      )}
    </NavBar>
  );
};

AccountNavigation.defaultProps = {};

AccountNavigation.propTypes = {};

export default AccountNavigation;
