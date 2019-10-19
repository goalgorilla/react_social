import React from "react";
import styled from "styled-components";

// A header for the Card component
const CardHeader = styled.div`
  border-bottom: 1px solid #e6e6e6;
  padding: 1.25rem;
  font-size: ${props => props.theme.font.size.default};
  font-weight: ${props => props.theme.font.weight.medium};
  color: ${props => props.theme.color.foreground.primary};
`;

export default CardHeader;
