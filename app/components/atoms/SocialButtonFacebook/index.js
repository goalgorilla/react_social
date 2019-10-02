import React from "react";
import styled from "styled-components";
import { Facebook } from "styled-icons/boxicons-logos/Facebook";

const StyledFacebook = styled(Facebook)`
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

const SocialButtonFacebook = () => {
  return <StyledFacebook size="26" />;
};

export default SocialButtonFacebook;
