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
        onClick={() => props.setCurrentTab("stream")}
        active={props.currentTab == "stream"}
      >
        <a>Stream</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setCurrentTab("events")}
        active={props.currentTab == "events"}
      >
        <a>Events</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setCurrentTab("topics")}
        active={props.currentTab == "topics"}
      >
        <a>Topics</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setCurrentTab("groups")}
        active={props.currentTab == "groups"}
      >
        <a>Groups</a>
      </StyledListItem>
      <StyledListItem
        onClick={() => props.setCurrentTab("information")}
        active={props.currentTab == "information"}
      >
        <a>Information</a>
      </StyledListItem>
    </StyledNav>
  );
}

export default ProfileNavigationBar;
