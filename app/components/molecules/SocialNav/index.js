import SocialButtonFacebook from "../../atoms/SocialButtonFacebook";
import SocialButtonLinkedIn from "../../atoms/SocialButtonLinkedIn";
import SocialButtonTwitter from "../../atoms/SocialButtonTwitter";
import SocialButtonYoutube from "../../atoms/SocialButtonYoutube";
import styled from "styled-components";
import { device } from "../../../utils/device";

const StyledSocialNav = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;

  li:first-child {
    margin-left: auto;
  }

  li:not(:last-child) {
    padding: 0 20px 0 0;
    text-decoration: none;
  }

  @media ${device.tablet} {
    margin-top: 0 !important;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    padding: 10px 0;

    li:first-child {
      margin-left: 0;
    }
  }
`;

const SocialNav = props => {
  return (
    <StyledSocialNav>
      <li>
        <SocialButtonYoutube />
      </li>
      <li>
        <SocialButtonTwitter />
      </li>
      <li>
        <SocialButtonFacebook />
      </li>
      <li>
        <SocialButtonLinkedIn />
      </li>
    </StyledSocialNav>
  );
};

export default SocialNav;
