import React from "react";
import styled from "styled-components";

// A basic title component - used, for example, for page titles
const StyledTitle = styled.h2`
  font-size: ${props => props.theme.font.size.large};
  line-height: ${props => props.theme.font.lineHeight.small};
  font-weight: ${props => props.theme.font.weight.medium};
`;

export default StyledTitle;
