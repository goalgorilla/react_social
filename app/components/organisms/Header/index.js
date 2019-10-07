import React from "react";
import styled from "styled-components";
import Logo from "../../atoms/Logo";
import NavigationList from "../../molecules/NavigationList";
import AccountNavigation from "../../molecules/AccountNavigation";

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background: ${props => props.theme.color.brand.primary};
  -webkit-box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.16),
    0 2px 4px rgba(0, 0, 0, 0.32);
  z-index: 999;
`;

const Header = ({ isAuthenticated, deauthenticate }) => (
  <Wrapper>
    <Logo></Logo>
    <NavigationList isAuthenticated={isAuthenticated}></NavigationList>
    <AccountNavigation
      isAuthenticated={isAuthenticated}
      deauthenticate={deauthenticate}
    ></AccountNavigation>
  </Wrapper>
);

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
