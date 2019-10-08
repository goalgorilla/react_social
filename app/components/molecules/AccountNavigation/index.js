import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";

const StyledHr = styled.hr`
  border: 0;
  border-top: 1px solid #f1f1f1;
  height: 1px;
  padding: 0;
  margin: 0 10px 0 10px;
`;

const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 50px;
  margin-left: auto;

  li {
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
  }

  li > a {
    display: flex;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.color.text.light};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size.mobile.default};
    align-self: center;
  }
`;

const AccountNavigation = ({ isAuthenticated, deauthenticate }) => {
  return (
    <NavBar>
      <NavigationDropdown
        title={<img src="/static/account.svg" width="24px" />}
      >
        {!isAuthenticated && (
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
        )}

        {isAuthenticated && (
          <ul>
            <p>Signed in as</p>
            <li>
              <Link href="/profile">
                <a>Chris Hall</a>
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
                <a>My events</a>
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
        )}
      </NavigationDropdown>
    </NavBar>
  );
};

AccountNavigation.defaultProps = {};

AccountNavigation.propTypes = {};

export default AccountNavigation;
