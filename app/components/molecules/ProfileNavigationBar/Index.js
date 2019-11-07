import styled from "styled-components";
import { deviceMaxWidth } from "../../../utils/device";

const StyledNav = styled.ul`
  position: absolute;
  left: 0;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background: #0f6892;
  padding: 10px 0;
  justify-content: center;
`;

const StyledListItem = styled.li`
  padding: 0 20px;
  height: 100%;

  a {
    color: white;
    font-size: 0.95rem;
    border-bottom: ${props => (props.active ? "3px solid white" : "none")};
    padding-bottom: 9px;
    font-weight: ${props => props.theme.font.weight.bold};
    opacity: ${props => (props.active ? "1" : "0.5")};
    cursor: pointer;
  }

  a:hover {
    opacity: 1;
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
