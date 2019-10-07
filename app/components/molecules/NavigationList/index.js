import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";

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

  li:active {
    opacity: 0.8;
  }

  li:first-child {
    background: #f3f3f3;
  }
`;

const NavigationList = ({ isAuthenticated }) => {
  return (
    <NavBar>
      <li>
        <a>
          <img src="/static/translate.svg" width="20px" />
        </a>
      </li>
      <li>
        <a>
          <img src="/static/hamburger.svg" width="20px" />
        </a>
      </li>
      <li>
        <a>
          <img src="/static/search.svg" width="24px" />
        </a>
      </li>
    </NavBar>
  );
};

NavigationList.defaultProps = {};

NavigationList.propTypes = {};

export default NavigationList;
