import React from "react";
import styled from "styled-components";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";

const StyledTwitter = styled(Twitter)`
  color: white;
  padding: 7px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
  background: ${props => props.theme.color.brand.primary};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const SocialButtonTwitter = () => {
  return <StyledTwitter size="26" />;
};

export default SocialButtonTwitter;
