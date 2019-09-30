import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.font.size.desktop.large};
  color: ${props => props.theme.color.foreground.primary};
  font-weight: ${props => props.theme.font.weight.medium};
  line-height: ${props => props.theme.font.lineHeight.small};
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
