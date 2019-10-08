import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";

const NavBar = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;

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
    font-weight: ${props => props.theme.font.weight.medium};
    align-self: center;
  }

  div:first-child > div > li {
    background: ${props => props.theme.color.background.secondary};
  }
`;

const NavigationList = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <NavigationDropdown
        title={<img src="/static/translate.svg" width="20px" />}
      ></NavigationDropdown>
      <NavigationDropdown
        title={<img src="/static/hamburger.svg" width="20px" />}
      >
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a>
              Explore <img src="/static/dropdown.svg" width="20px" />
            </a>
          </li>
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
        </ul>
      </NavigationDropdown>
      <NavigationDropdown
        title={<img src="/static/search.svg" width="24px" />}
      ></NavigationDropdown>
    </NavBar>
  );
};

NavigationList.defaultProps = {};

NavigationList.propTypes = {};

export default NavigationList;
