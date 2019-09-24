import React from "react";
import styled from "styled-components";

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

export default Label;
