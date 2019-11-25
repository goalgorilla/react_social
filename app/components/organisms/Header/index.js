import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavigationList from "../../molecules/NavigationList";
import AccountNavigation from "../../molecules/AccountNavigation";
import NavigationDropdown from "../../molecules/NavigationDropdown";
import { deviceMinWidth } from "../../../utils/device";

// The header of the website. Containing the navigation bars.
const Wrapper = styled.div`
  position: fixed;
  z-index: 900;
  top: 0;
  display: flex;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0),
    0 2px 4px rgba(0, 0, 0, 0.32);
  width: 100%;
  height: 50px;
  background: ${props => props.theme.color.brand.primary};
  user-select: none;

  @media ${deviceMinWidth.tablet} {
    height: 100px;
  }
`;

const NavRow = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: ${props => props.theme.font.size.small};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.color.text.light};

  & > a {
    margin-left: auto;
    margin-right: 15px;
    padding: 0 12.5px 0 12.5px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: ${props => props.theme.color.text.three};
  }

  &:first-of-type {
    display: none;
    color: ${props => props.theme.color.text.three};
    background: ${props => props.theme.color.background.secondary};
    padding-left: 0.9375rem;
  }

  &:first-of-type > div {
    display: flex;
    align-items: center;
  }

  &:first-of-type div > li > a {
    display: block;
    height: 100%;
    line-height: 50px;
    padding: 0 0.6125rem 0 0.6125rem;
  }

  &:first-of-type div > li > a > img {
    vertical-align: middle;
    margin-top: -4px;
  }

  &:first-of-type > div > a {
    display: flex;
    align-items: center;
  }

  &:first-of-type > div img:first-of-type {
    padding-right: 10px;
    opacity: 0.9;
  }

  @media ${deviceMinWidth.tablet} {
    &:first-of-type {
      display: flex;
      position: relative;
    }
  }
`;

const NavWrapper = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;

  @media ${deviceMinWidth.tablet} {
    flex-direction: column;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo></Logo>
    <NavWrapper>
      <NavRow>
        <NavigationDropdown
          button={
            <React.Fragment>
              <img src="/static/translate.svg" width="20px" />
              English
              <img src="/static/dropdown.svg" width="20px" />
            </React.Fragment>
          }
          navRowOne={true}
        >
          <ul>
            <li>
              <a>English (current)</a>
            </li>
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
        <a href="http://www.getopensocial.com" target="_blank">
          getopensocial.com
        </a>
      </NavRow>
      <NavRow>
        <NavigationList />
        <AccountNavigation />
      </NavRow>
    </NavWrapper>
  </Wrapper>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
