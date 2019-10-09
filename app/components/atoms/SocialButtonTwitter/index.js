import React from "react";
import styled from "styled-components";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";

const StyledTwitter = styled(Twitter)`
  margin: 5px 2px;
  padding: 7px;
  border-radius: 50%;
  background: ${props => props.theme.color.brand.primary};
  text-align: center;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SocialButtonTwitter = () => {
  return <StyledTwitter size="26" />;
};

export default SocialButtonTwitter;
