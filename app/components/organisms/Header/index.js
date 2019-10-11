import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavigationList from "../../molecules/NavigationList";
import AccountNavigation from "../../molecules/AccountNavigation";
import { deviceMinWidth } from "../../../utils/device";

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
  height: 50px;
  width: 100%;

  & > a {
    font-size: ${props => props.theme.font.size.desktop.small};
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.color.text.three};
    text-align: center;
    line-height: 50px;
    padding: 0 12.5px 0 12.5px;
  }

  & > a:last-child {
    margin-left: auto;
  }

  &:first-of-type {
    display: none;
    background: ${props => props.theme.color.background.secondary};
  }

  @media ${deviceMinWidth.tablet} {
    &:first-of-type {
      display: flex;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
        <a>English</a>
        <a>getopensocial.com</a>
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
