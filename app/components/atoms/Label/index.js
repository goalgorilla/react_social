import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLabel = styled.label`
  margin: 20px; /* remove this */
  font-size: 14px;
  color: #4d4d4d;
  font-weight: 500;
`;

const Required = styled.span`
  color: red;
`;

const Label = props => {
  if (props.required) {
    return (
      <StyledLabel>
        {props.text}
        <Required>*</Required>
      </StyledLabel>
    );
  }
  return <StyledLabel>{props.text}</StyledLabel>;
};

Label.defaultProps = {
  required: false
};

Label.propTypes = {
  /** boolean indicating if the form is required */
  required: PropTypes.bool
};

export default Label;
