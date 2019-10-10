import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    position: absolute;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 10px 10px 10px;
    background: ${props => props.theme.color.background.primary};
    list-style-type: none;
  }

  ul p {
    margin: 10px 0 -5px 0;
    padding-left: 10px;
    font-size: ${props => props.theme.font.size.mobile.small};
    color: ${props => props.theme.color.text.one};
  }

  ul li {
    justify-content: flex-start;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  ul li a {
    align-items: center;
    font-size: ${props => props.theme.font.size.mobile.medium};
    font-weight: ${props => props.theme.font.weight.default};
    color: ${props => props.theme.color.foreground.primary};
  }

  ul > ul {
    padding: 5px 0 5px 25px;
    background: ${props => props.theme.color.background.secondary};
  }

  div > ul {
    padding: 5px 0 5px 25px;
    background: ${props => props.theme.color.background.secondary};
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
`;

const NavButton = styled.li`
  background: ${props =>
    props.active
      ? props.theme.color.brand.tertiary
      : props.theme.color.brand.primary};
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

  componentDidMount() {
    document.addEventListener("mouseup", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mouseup", this.handleClickOutside);
  }

  handleButtonClick = () => {
    this.setState(state => {
      return {
        displayMenu: !state.displayMenu
      };
    });
  };

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
    if (this.props.button) {
      return (
        <div>
          <Wrapper className="container" ref={this.container}>
            <NavButton
              onClick={this.handleButtonClick}
              active={this.state.displayMenu}
            >
              <a>{this.props.button}</a>
            </NavButton>
            {this.state.displayMenu ? this.props.children : null}
          </Wrapper>
          {this.state.displayMenu && <PageDim></PageDim>}
        </div>
      );
    } else if (this.props.title) {
      return (
        <div className="container" ref={this.container}>
          <span onClick={this.handleButtonClick}>{this.props.title}</span>
          {this.state.displayMenu ? this.props.children : null}
        </div>
      );
    }
  }
}

export default NavigationDropdown;
