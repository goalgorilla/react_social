import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import NavigationDropdown from "../NavigationDropdown";
import SearchBar from "../../molecules/SearchBar";
import { deviceMinWidth, deviceMaxWidth } from "../../../utils/device";
import HorizontalLine from "../../atoms/HorizontalLine";

// This NavigationList component contains the list of links the user can use to traverse the site. It is used in the header.
const StyledHorizontalLine = styled(HorizontalLine)`
  margin: 0 0.625rem 0 0.625rem;
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
    min-width: 50px;
    height: 50px;
  }

  li > a {
    align-self: center;
    display: flex;
    cursor: pointer;
    padding: 0 0.6125rem 0 0.6125rem;
    text-decoration: none;
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
  }

  & > ul > li > div {
    width: 100%;
  }

  @media ${deviceMinWidth.tablet} {
    display: flex;
  }
`;

// Language dropdown contents
const languageDropdownList = (
  <ul>
    <SearchBar placeholder="Type in the language"></SearchBar>
    <li>
      <a>English (current)</a>
    </li>
    <StyledHorizontalLine></StyledHorizontalLine>
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
);

// Explore dropdown contents
const exploreDropdownList = (
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
);

const NavigationList = () => {
  return (
    <NavBar>
      {/* Mobile NavList */}
      <MobileWrapper>
        {/* Mobile translation button & dropdown */}
        <NavigationDropdown
          button={<img src="/static/translate.svg" width="20px" />}
        >
          {languageDropdownList}
        </NavigationDropdown>
        {/* Mobile hamburger button & dropdown */}
        <NavigationDropdown
          button={<img src="/static/hamburger.svg" width="20px" />}
        >
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            {/* Nested explore dropdown inside hamburger menu */}
            <NavigationDropdown
              title={
                <li>
                  <a>
                    Explore <img src="/static/dropdown.svg" width="20px" />
                  </a>
                </li>
              }
            >
              {exploreDropdownList}
            </NavigationDropdown>
          </ul>
        </NavigationDropdown>
      </MobileWrapper>
      {/* Desktop NavList */}
      <DesktopWrapper>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* Desktop explore dropdown */}
          <NavigationDropdown button={"Explore"}>
            {exploreDropdownList}
          </NavigationDropdown>
        </ul>
      </DesktopWrapper>
      {/* Search button */}
      <NavigationDropdown
        button={<img src="/static/search.svg" width="24px" />}
      ></NavigationDropdown>
    </NavBar>
  );
};

NavigationList.defaultProps = {};

NavigationList.propTypes = {};

export default NavigationList;
