import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  ul {
    background: ${props => props.theme.color.background.primary};
    list-style-type: none;
    padding: 0;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 10px 0 10px 10px;
  }

  ul li {
    display: flex;
    height: 100%;
    justify-content: flex-start;
    width: 100%;
    padding: 10px;
  }

  ul > li > a {
    color: ${props => props.theme.color.foreground.primary};
    font-weight: ${props => props.theme.font.weight.default};
    font-size: ${props => props.theme.font.size.mobile.medium};
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
      ? props.theme.color.brand.secondary
      : props.theme.color.brand.primary};
`;

class NavigationDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div>
        <Wrapper>
          <NavButton
            onClick={this.showDropdownMenu}
            active={this.state.displayMenu}
          >
            <a>{this.props.title}</a>
          </NavButton>
          {this.state.displayMenu ? this.props.children : null}
        </Wrapper>
        {this.state.displayMenu && <PageDim></PageDim>}
      </div>
    );
  }
}

export default NavigationDropdown;
