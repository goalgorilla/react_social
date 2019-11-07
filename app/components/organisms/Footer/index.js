import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { deviceMaxWidth } from "../../../utils/device";
import SocialNav from "../../molecules/SocialNav";

// The footer of the website, contains SocialNav, FooterNav and any children in the form of a <p> tag.
const Wrapper = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background: white;

  @media ${deviceMaxWidth.tablet} {
    height: 22rem;
  }
`;

const FooterContent = styled.div`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth};
  padding: ${props => props.theme.layout.padding};
  padding-top: 0.9375rem;

  p {
    margin-bottom: 1.25rem;
    margin-top: -0.625rem;
    font-size: ${props => props.theme.font.size.small};
    line-height: ${props => props.theme.font.lineHeight.default};
    font-weight: ${props => props.theme.font.weight.regular};
    color: ${props => props.theme.color.text.one};
  }

  ul {
    flex: 0 50%;
    margin: 0.9375rem 0 0;
  }

  * {
  }

  @media ${deviceMaxWidth.tablet} {
    flex-direction: column;

    p {
      margin-top: 1.25rem;
    }
  }
`;

const FooterNav = styled.ul`
  flex-direction: row;
  align-self: flex-start;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: ${props => props.theme.font.size.medium};
  list-style-type: none;

  a {
    padding: 0 1.563rem 0 0;
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => props.theme.color.brand.primary};
    text-decoration: none;
  }
  @media ${deviceMaxWidth.tablet} {
    flex-direction: column;
    height: 9.375rem;

    a {
      padding: 0 0 1.563rem 0;
    }
  }
`;

const Footer = ({ children }) => (
  <Wrapper>
    <FooterContent>
      <FooterNav>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/privacy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/about">
          <a>Terms of Use</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </FooterNav>
      <SocialNav />
      <p>{children}</p>
    </FooterContent>
  </Wrapper>
);

Footer.defaultProps = {};

Footer.propTypes = {};

export default Footer;
