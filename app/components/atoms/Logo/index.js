import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  display: inline-block;
  vertical-align: top;
  height: 50px;
  max-width: 200px;
  overflow: hidden;
`;

const StyledImg = styled.img`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <StyledLink href="/">
      <StyledImg src="/static/logo.svg" alt="[Community Name]" />
    </StyledLink>
  );
};

export default Logo;
