import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../../molecules/NavigationDropdown";

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

  li:active {
    opacity: 0.8;
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
