import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: ${prop => prop.theme.font.family};
  font-weight: ${prop => prop.theme.font.weight.medium};
  background-color: ${prop => prop.theme.color.brand.primary};
  font-size: ${prop => prop.theme.font.size.desktop.default};
  line-height: ${prop => prop.theme.font.lineHeight.default};
  border-radius: ${prop => prop.theme.layout.borderRadius.default};
  border-color: ${prop => prop.theme.color.brand.primary};
  max-width: 180px;
  padding: 6px 60px;
  color: ${prop => prop.theme.color.text.light};
  outline: 0;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  -webkit-transition: 0.15s ease-out, -webkit-box-shadow;
  transition: 0.15s ease-out, -webkit-box-shadow;
  transition: box-shadow, 0.15s ease-out;
  transition: box-shadow, 0.15s ease-out, -webkit-box-shadow;
  cursor: pointer;

  &:hover {
    background-color: ${prop => prop.theme.color.brand.secondary};
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
