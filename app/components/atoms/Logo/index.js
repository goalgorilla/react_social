import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { deviceMinWidth } from "../../../utils/device";

// A basic logo component used, for example, in the header
const StyledA = styled.a`
  display: inline-block;
  overflow: hidden;
  min-width: 3.125rem;

  @media ${deviceMinWidth.tablet} {
    min-width: 6.25rem;
  }
`;

const StyledImg = styled.img`
  cursor: pointer;

  @media ${deviceMinWidth.tablet} {
    height: 6.25rem;
    width: 6.25rem;
  }
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
