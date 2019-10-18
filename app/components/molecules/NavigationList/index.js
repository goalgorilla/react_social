import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";
import SearchBar from "../../molecules/SearchBar";
import { deviceMinWidth } from "../../../utils/device";

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

const MobileWrapper = styled.div`
  display: flex;
  @media ${deviceMinWidth.tablet} {
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display: none;
  padding-left: 15px;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
  }

  ul > li {
    align-items: center;
    display: flex;
    width: 100%;
    padding-right: 20px;
  }

  ul > li > a {
    color: inherit;
  }

  ul > li > div {
    width: 100%;
  }
  @media ${deviceMinWidth.tablet} {
    display: flex;
  }
`;

const NavigationList = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <MobileWrapper>
        <NavigationDropdown
          button={<img src="/static/translate.svg" width="20px" />}
        >
          <ul>
            <SearchBar placeholder="Type in the language"></SearchBar>
            <li>
              <a>English (current)</a>
            </li>
            <StyledHr></StyledHr>
            <li>
              <a>Afrikaans</a>
            </li>
            <li>
              <a>Albanian</a>
            </li>
            <li>
              <a>Amharic</a>
            </li>
            <li>
              <a>Arabic</a>
            </li>
            <li>
              <a>Armenian</a>
            </li>
            <li>
              <a>Azerbaijani</a>
            </li>
          </ul>
        </NavigationDropdown>
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
      </MobileWrapper>
      <DesktopWrapper>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <NavigationDropdown title={<a>Explore</a>}></NavigationDropdown>
          </li>
        </ul>
      </DesktopWrapper>
      <NavigationDropdown
        button={<img src="/static/search.svg" width="24px" />}
      ></NavigationDropdown>
    </NavBar>
  );
};

NavigationList.defaultProps = {};

NavigationList.propTypes = {};

export default NavigationList;
