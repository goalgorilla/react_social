import React from 'react';
import styled from 'styled-components';
import {Facebook} from 'styled-icons/boxicons-logos/Facebook';

// Facebook social media button - used, for example, in the footer
const StyledFacebook = styled(Facebook)`
  box-sizing: content-box; // This is to prevent a styling conflict with open social resulting in the social button's being smaller than expected
  margin: 0.3125rem 0.125rem;
  padding: 0.4375rem;
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

const SocialButtonFacebook = () => {
  return <StyledFacebook size="26" />;
};

export default SocialButtonFacebook;
