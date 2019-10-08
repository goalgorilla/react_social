import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledA = styled.a`
  display: inline-block;
  vertical-align: top;
  height: 50px;
  min-width: 50px;
  max-width: 200px;
  overflow: hidden;
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
