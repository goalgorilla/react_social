import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";
import styled from "styled-components";
import Footer from "./organisms/Footer";

const TempHeader = styled.div`
  background: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  ul {
    max-width: ${props => props.theme.layout.maxWidth};
    margin: auto;
    height: 100%;
    line-height: 50px;
    padding: ${props => props.theme.layout.padding};
  }

  a {
    color: white;
    text-decoration: none;
    padding: 0 20px 0 0;
    font-weight: 500;
  }

  li a {
    display: inline-block;
  }

  a:last-child {
    float: right;
  }
`;

const Content = styled.div`
  max-width: ${props => props.theme.layout.maxWidth};
  margin: auto;
  padding: ${props => props.theme.layout.padding};
  padding-top: 50px;
  padding-bottom: 23rem;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Layout = ({ children, title, isAuthenticated, deauthenticate }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="shortcut icon"
        href="/static/favicon.ico"
        type="image/vnd.microsoft.icon"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Wrapper>
      <TempHeader>
        <ul>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/whoami">
            <a>Profile</a>
          </Link>
          {!isAuthenticated && (
            <Link href="/login">
              <a>Login</a>
            </Link>
          )}
          {isAuthenticated && (
            <li onClick={deauthenticate}>
              <a>Sign Out</a>
            </li>
          )}
        </ul>
      </TempHeader>
      <Content>{children}</Content>
      <Footer>Copyright © 2019. [Community name]. All rights reserved.</Footer>
    </Wrapper>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
