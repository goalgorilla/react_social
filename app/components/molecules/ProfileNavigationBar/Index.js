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

  li {
    padding: 0 20px;
  }

  li a {
    color: white;
    font-size: 0.95rem;
    font-weight: ${props => props.theme.font.weight.bold};
    opacity: 0.5;
    cursor: pointer;
  }

  li a:hover {
    opacity: 1;
  }
`;

const ProfileNavigationBar = () => {
  return (
    <StyledNav>
      <li>
        <a>Stream</a>
      </li>
      <li>
        <a>Events</a>
      </li>
      <li>
        <a>Topics</a>
      </li>
      <li>
        <a>Groups</a>
      </li>
      <li>
        <a>Information</a>
      </li>
    </StyledNav>
  );
};

export default ProfileNavigationBar;
