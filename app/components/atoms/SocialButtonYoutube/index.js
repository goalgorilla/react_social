import React from "react";
import styled from "styled-components";
import { Youtube } from "styled-icons/boxicons-logos/Youtube";

const StyledYoutube = styled(Youtube)`
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

const SocialButtonYoutube = () => {
  return <StyledYoutube size="26" />;
};

export default SocialButtonYoutube;
