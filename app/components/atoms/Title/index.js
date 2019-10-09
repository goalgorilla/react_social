import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.font.size.desktop.large};
  line-height: ${props => props.theme.font.lineHeight.small};
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.color.foreground.primary};
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
