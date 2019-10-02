import React from "react";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import { device } from "../../../utils/device";
import SocialNav from "../../molecules/SocialNav";

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: white;
  height: 10rem;

  @media ${device.tablet} {
    height: 22rem;
  }
`;

const FooterContent = styled.div`
  padding: ${props => props.theme.layout.padding};
  max-width: ${props => props.theme.layout.maxWidth};
  margin: auto;
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  flex-wrap: wrap;

  p {
    color: ${props => props.theme.color.text.one};
    line-height: ${props => props.theme.font.lineHeight.default};
    font-weight: ${props => props.theme.font.weight.regular};
    font-size: ${props => props.theme.font.size.desktop.small};
    margin-bottom: 20px;
    margin-top: -10px;
  }

  ul {
    margin: 15px 0 0;
    flex: 0 50%;
  }

  * {
  }

  @media ${device.tablet} {
    flex-direction: column;

    p {
      margin-top: 20px;
    }
  }
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: ${props => props.theme.font.size.desktop.medium};
  align-self: flex-start;

  a {
    padding: 0 25px 0 0;
    color: ${props => props.theme.color.brand.primary};
    text-decoration: none;
    font-weight: ${props => props.theme.font.weight.bold};
  }
  @media ${device.tablet} {
    flex-direction: column;
    height: 150px;

    a {
      padding: 0 0 25px 0;
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
