import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primaryTextColor};
`;

export default () => (
  <div>
    <Title>Hello World!</Title>
    <p>test</p>
  </div>
);
