import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  margin: 20px; /* remove this */
  font-size: 20px;
  color: #4d4d4d;
  font-weight: 500;
  line-height: 1.1;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
