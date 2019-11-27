import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/GlobalStyle";
import theme from "../components/themes/theme.js";
import initialize from "../utils/initialize";
import { UserProvider } from "../components/auth/userContext";
import { getCookie } from "../utils/cookie";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Initial userContext state
    let props = {
      isLoggedIn: false,
      token: "",
      username: "",
      id: "",
      avatar: ""
    };
    // Get userContext state from cookies
    if ((ctx.isServer && ctx.req.headers.cookie) || !ctx.isServer) {
      if (getCookie("token", ctx.req)) {
        props = {
          isLoggedIn: true,
          token: getCookie("token", ctx.req),
          username: getCookie("username", ctx.req),
          id: getCookie("id", ctx.req),
          avatar: getCookie("avatar", ctx.req)
        };
      }
    }
    return {
      pageProps: {
        ...props,
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }
  // render the app with the user provider, theme and globalstyle
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <UserProvider state={pageProps}>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
