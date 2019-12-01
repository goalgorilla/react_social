import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// This component can be used as a label for an input field
const StyledLabel = styled.label`
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.medium};
`;

const Required = styled.span`
  color: red;
`;

// If a required prop is passed a required '*' symbol is added to the end of the label
const Label = ({children, required}) => {
  if (required) {
    return (
      <StyledLabel>
        {children}
        <Required>*</Required>
      </StyledLabel>
    );
  }
  return <StyledLabel>{children}</StyledLabel>;
};

Label.defaultProps = {
  required: false,
};

Label.propTypes = {
  /** boolean indicating if the form is required */
  required: PropTypes.bool,
  children: PropTypes.node,
};

export default Label;
