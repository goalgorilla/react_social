import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  font-size: ${props => props.theme.font.size.medium};
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.color.foreground.primary};
`;

const Required = styled.span`
  color: red;
`;

const Label = ({ children, required }) => {
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
  required: false
};

Label.propTypes = {
  /** boolean indicating if the form is required */
  required: PropTypes.bool
};

export default Label;
