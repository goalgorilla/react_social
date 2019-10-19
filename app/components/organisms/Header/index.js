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
  z-index: 999;
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
    padding-left: 30px;
  }

  &:first-of-type > div {
    display: flex;
    align-items: center;
  }

  &:first-of-type > div > * {
    display: flex;
    align-items: center;
  }

  &:first-of-type > div img {
    padding-right: 10px;
    opacity: 0.9;
  }

  @media ${deviceMinWidth.tablet} {
    padding-left: 15px;

    &:first-of-type {
      display: flex;
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

const Header = ({
  isAuthenticated,
  deauthenticate,
  username,
  profileImage
}) => (
  <Wrapper>
    <Logo></Logo>
    <NavWrapper>
      <NavRow>
        <NavigationDropdown
          title={
            <a>
              <img src="/static/translate.svg" width="20px" />
              English <img src="/static/dropdown.svg" width="20px" />
            </a>
          }
        ></NavigationDropdown>
        <a href="http://www.getopensocial.com" target="_blank">
          getopensocial.com
        </a>
      </NavRow>
      <NavRow>
        <NavigationList isAuthenticated={isAuthenticated}></NavigationList>
        <AccountNavigation
          isAuthenticated={isAuthenticated}
          deauthenticate={deauthenticate}
          username={username}
          profileImage={profileImage}
        ></AccountNavigation>
      </NavRow>
    </NavWrapper>
  </Wrapper>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
