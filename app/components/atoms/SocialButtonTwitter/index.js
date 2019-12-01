import React from 'react';
import styled from 'styled-components';
import {Twitter} from 'styled-icons/fa-brands/Twitter';

// Twitter social media button - used, for example, in the footer
const StyledTwitter = styled(Twitter)`
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

const SocialButtonTwitter = () => {
  return <StyledTwitter size="24" />;
};

export default SocialButtonTwitter;
