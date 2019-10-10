import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";

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
    width: 50px;
    height: 50px;
  }

  li > a {
    align-self: center;
    display: flex;
    cursor: pointer;
    text-decoration: none;
  }

  div:first-child > div > li {
    background: ${props => props.theme.color.background.secondary};
  }
`;

const NavigationList = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <NavigationDropdown
        button={<img src="/static/translate.svg" width="20px" />}
      ></NavigationDropdown>
      <NavigationDropdown
        button={<img src="/static/hamburger.svg" width="20px" />}
      >
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <NavigationDropdown
            title={
              <li>
                <a>
                  Explore <img src="/static/dropdown.svg" width="20px" />
                </a>
              </li>
            }
          >
            <ul>
              <li>
                <Link href="/community">
                  <a>Community</a>
                </Link>
              </li>
              <li>
                <Link href="/groups">
                  <a>All groups</a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a>All events</a>
                </Link>
              </li>
              <li>
                <Link href="/topics">
                  <a>All topics</a>
                </Link>
              </li>
              <li>
                <Link href="/members">
                  <a>All members</a>
                </Link>
              </li>
            </ul>
          </NavigationDropdown>
        </ul>
      </NavigationDropdown>
      <NavigationDropdown
        button={<img src="/static/search.svg" width="24px" />}
      ></NavigationDropdown>
    </NavBar>
  );
};

NavigationList.defaultProps = {};

NavigationList.propTypes = {};

export default NavigationList;
