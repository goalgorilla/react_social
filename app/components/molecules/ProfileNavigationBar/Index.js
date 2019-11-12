import styled from "styled-components";
import { deviceMaxWidth, deviceMinWidth } from "../../../utils/device";

const StyledNav = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  margin: 0;
  list-style-type: none;
  background: ${props => props.theme.color.brand.tertiary};
  padding: 10px 0;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 490px) {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0) 30px
      ),
      linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0) 30px);
  }

  @media ${deviceMinWidth.laptop} {
    position: relative;
    border-radius: 5px 5px 0px 0px;
    justify-content: center;
    align-items: center;
    min-height: 45px;
    padding: 0;
  }
`;

const StyledListItem = styled.li`
  padding: 0 20px;
  height: 100%;

  a {
    color: white;
    font-size: ${props => props.theme.font.size.medium};
    border-bottom: ${props => (props.active ? "3px solid white" : "none")};
    padding-bottom: 9px;
    font-weight: ${props => props.theme.font.weight.bold};
    opacity: ${props => (props.active ? "1" : "0.5")};
    cursor: pointer;
  }

  a:hover {
    opacity: 1;
  }

  @media ${deviceMinWidth.laptop} {
    a {
      padding-bottom: 10px;
    }
  }
`;

function ProfileNavigationBar(props) {
  return (
    <StyledNav>
      <StyledListItem
        onClick={() => props.setActivePanel("stream")}
        active={props.activePanel == "stream"}
      >
        <a>Stream</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setActivePanel("events")}
        active={props.activePanel == "events"}
      >
        <a>Events</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setActivePanel("topics")}
        active={props.activePanel == "topics"}
      >
        <a>Topics</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setActivePanel("groups")}
        active={props.activePanel == "groups"}
      >
        <a>Groups</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setActivePanel("information")}
        active={props.activePanel == "information"}
      >
        <a>Information</a>
      </StyledListItem>
    </StyledNav>
  );
}

export default ProfileNavigationBar;
