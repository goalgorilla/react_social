import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// A component to provide a description for a input field
const StyledInputDescription = styled.h4`
  margin: 0;
  cursor: ${props => (props.link ? 'pointer' : 'default')};
  font-size: 0.75rem;
  font-weight: ${props =>
    props.link
      ? props.theme.font.weight.medium
      : props.theme.font.weight.light};
`;

// returns a differently styled description when the link prop is passed so the user can tell the description is a link
const InputDescription = ({children, link}) => {
  if (link) {
    return <StyledInputDescription link>{children}</StyledInputDescription>;
  }
  return <StyledInputDescription>{children}</StyledInputDescription>;
};

InputDescription.defaultProps = {
  link: false,
};

InputDescription.propTypes = {
  /** boolean indicating if the input description is a link to another page */
  link: PropTypes.bool,
  children: PropTypes.node,
};

export default InputDescription;
