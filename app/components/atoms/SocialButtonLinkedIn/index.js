import React from "react";
import styled from "styled-components";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";

const StyledLinkedIn = styled(Linkedin)`
  color: white;
  padding: 9px;
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

const SocialButtonLinkedIn = () => {
  return <StyledLinkedIn size="24" />;
};

export default SocialButtonLinkedIn;
