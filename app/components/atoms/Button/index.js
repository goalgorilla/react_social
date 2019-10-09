import React from "react";
import styled from "styled-components";
import { device } from "../../../utils/device";

const StyledButton = styled.button`
  transition: box-shadow, 0.15s ease-out;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  border-radius: ${prop => prop.theme.layout.borderRadius.default};
  border-color: ${prop => prop.theme.color.brand.primary};
  padding: 6px 60px;
  background-color: ${prop => prop.theme.color.brand.primary};
  cursor: pointer;
  font-size: ${prop => prop.theme.font.size.desktop.default};
  line-height: ${prop => prop.theme.font.lineHeight.default};
  font-family: ${prop => prop.theme.font.family};
  font-weight: ${prop => prop.theme.font.weight.medium};
  color: ${prop => prop.theme.color.text.light};

  &:hover {
    background-color: ${prop => prop.theme.color.brand.secondary};
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
