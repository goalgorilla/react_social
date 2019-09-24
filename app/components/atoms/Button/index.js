import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin: 20px; /* remove this */
  font-family: inherit;
  font-weight: 500;
  background-color: #36a9e1;
  font-size: 16px;
  line-height: 1.5;
  border-radius: 5px;
  border-color: #36a9e1;
  padding: 6px 60px;
  color: #ffffff;
  outline: 0;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  -webkit-transition: 0.15s ease-out, -webkit-box-shadow;
  transition: 0.15s ease-out, -webkit-box-shadow;
  transition: box-shadow, 0.15s ease-out;
  transition: box-shadow, 0.15s ease-out, -webkit-box-shadow;
  cursor: pointer;

  &:hover {
    background-color: #2189b5;
  }
`;

const Button = props => {
  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
