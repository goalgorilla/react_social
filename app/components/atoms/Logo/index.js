import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledA = styled.a`
  display: inline-block;
  overflow: hidden;
  min-width: 50px;
  max-width: 200px;
  height: 50px;
  vertical-align: top;
`;

const StyledImg = styled.img`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link href="/">
      <StyledA>
        <StyledImg src="/static/logo.svg" alt="[Community Name]" />
      </StyledA>
    </Link>
  );
};

export default Logo;
