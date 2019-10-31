import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";
import styled from "styled-components";

const TempHeader = styled.div`
  background: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;

  a {
    color: white;
    text-decoration: none;
    padding: 0 20px 0 0;
    font-weight: 500;
  }

  li {
    display: inline-block;
  }
`;

const Content = styled.div`
  padding-top: 50px;
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
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
