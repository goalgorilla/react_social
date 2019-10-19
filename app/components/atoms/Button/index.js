import React from "react";
import styled from "styled-components";
import { deviceMaxWidth } from "../../../utils/device";

// A basic styled button component used for form submission
const StyledButton = styled.button`
  transition: box-shadow, 0.15s ease-out;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.24), 0 2px 4px rgba(0, 0, 0, 0.48);
  border-radius: ${prop => prop.theme.layout.borderRadius.default};
  border-color: ${prop => prop.theme.color.brand.primary};
  padding: 0.375rem 3.75rem;
  background-color: ${prop => prop.theme.color.brand.primary};
  cursor: pointer;
  font-size: ${prop => prop.theme.font.size.default};
  line-height: ${prop => prop.theme.font.lineHeight.default};
  font-family: ${prop => prop.theme.font.family};
  font-weight: ${prop => prop.theme.font.weight.medium};
  color: ${prop => prop.theme.color.text.light};

  &:hover {
    background-color: ${prop => prop.theme.color.brand.secondary};
  }

  @media ${deviceMaxWidth.mobileL} {
    width: 100%;
  }
`;

export default StyledButton;
