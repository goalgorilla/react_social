import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { deviceMinWidth } from "../../../utils/device";

// This component is used for dropdown menus in the Header.
const Wrapper = styled.div`
  ul {
    z-index: 1000;
    position: absolute;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 0.625rem 0.625rem 0.625rem 0.625rem;
    background: ${props => props.theme.color.background.primary};
    list-style-type: none;
  }

  ul p {
    margin: 0.625rem 0 -0.3125rem 0;
    padding-left: 0.625rem;
    font-size: ${props => props.theme.font.size.small};
    font-weight: ${props => props.theme.font.weight.regular};
    color: ${props => props.theme.color.text.one};
  }

  ul li {
    justify-content: flex-start;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0.625rem;
  }

  ul li a {
    align-items: center;
    font-size: ${props => props.theme.font.size.medium};
    font-weight: ${props => props.theme.font.weight.default};
    color: ${props => props.theme.color.foreground.primary};
    text-decoration: none;
    cursor: pointer;
  }

  ul > ul {
    padding: 0.3125rem 0 0.3125rem 1.563rem;
    background: ${props => props.theme.color.background.secondary};
  }

  div > ul {
    padding: 0.3125rem 0 0.3125rem 1.563rem;
    background: ${props => props.theme.color.background.secondary};
  }

  @media ${deviceMinWidth.tablet} {
    position: relative;
    ul {
      position: absolute;
      right: ${props => (props.rightAlign ? "0" : "auto")};
      left: ${props => (props.rightAlign ? "auto" : "0")};
      margin-top: 0.3125rem;
      width: auto;
      padding: 0.125rem 0 0.125rem 0;
      border-radius: ${props => props.theme.layout.borderRadius.default};
      box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0),
        0 2px 4px rgba(0, 0, 0, 0.5);
    }

    ul li {
      padding-right: 4.688rem;
    }

    ul li a {
      font-size: ${props => props.theme.font.size.small};
    }

    ul p {
      font-size: ${props => props.theme.font.size.verySmall};
    }
  }
`;

const PageDim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #303030;
  opacity: 1;
  margin-top: 50px;
  z-index: -1;

  @media ${deviceMinWidth.tablet} {
    display: none;
  }
`;

// If the button is on the top nav row we use different background colors
const NavButton = styled.li`
  background: ${props =>
    props.active
      ? props.navRowOne
        ? props.theme.color.background.primary
        : props.theme.color.brand.tertiary
      : props.navRowOne
      ? "none"
      : props.theme.color.brand.primary};
  cursor: pointer;
  list-style-type: none;
`;

const NavLink = styled.div`
  cursor: pointer;
`;

class NavigationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      displayMenu: false
    };
  }

  // Adds a listener for the user's clicks to run the handleClickOutside() method
  componentDidMount() {
    document.addEventListener("mouseup", this.handleClickOutside);
  }
  // Removes the click listener when the component will unmount
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleClickOutside);
  }

  // Toggles the display of the dropdown
  handleButtonClick = () => {
    this.setState(state => {
      return {
        displayMenu: !state.displayMenu
      };
    });
  };

  // Checks if the user clicked outside of the dropdown and closes the dropdown if they did
  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        displayMenu: false
      });
    }
  };

  render() {
    {
      /* if a button is passed return this code block */
    }
    if (this.props.button) {
      return (
        <div>
          <Wrapper
            className="container"
            ref={this.container}
            rightAlign={this.props.rightAlign}
          >
            <NavButton
              onClick={this.handleButtonClick}
              active={this.state.displayMenu}
              navRowOne={this.props.navRowOne}
            >
              <a>{this.props.button}</a>
            </NavButton>
            {this.state.displayMenu ? this.props.children : null}
          </Wrapper>
          {this.state.displayMenu && <PageDim></PageDim>}
        </div>
      );
      {
        /* if a title is passed return this code block */
      }
    } else if (this.props.title) {
      return (
        <NavLink
          className="container"
          ref={this.container}
          onClick={this.handleButtonClick}
        >
          {this.props.title}
          {this.state.displayMenu ? this.props.children : null}
        </NavLink>
      );
    }
  }
}

export default NavigationDropdown;
