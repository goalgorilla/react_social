import Link from "next/link";
import Head from "next/head";
import { connect } from "react-redux";
import actions from "../redux/actions";
import styled from "styled-components";
import Footer from "./organisms/Footer";
import Header from "./organisms/Header";

const Content = styled.div`
  margin: auto;
  max-width: ${props => props.theme.layout.maxWidth};
  padding: ${props => props.theme.layout.padding};
  padding-top: 50px;
  padding-bottom: 23rem;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Layout = ({
  children,
  title,
  isAuthenticated,
  deauthenticate,
  username
}) => (
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
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Wrapper>
      <Header
        isAuthenticated={isAuthenticated}
        deauthenticate={deauthenticate}
        username={username}
      ></Header>
      <Content>{children}</Content>
      <Footer>Copyright © 2019. [Site Name]. All rights reserved.</Footer>
    </Wrapper>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.authentication.token,
  username: state.authentication.username
});

export default connect(
  mapStateToProps,
  actions
)(Layout);
