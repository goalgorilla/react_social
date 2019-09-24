import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
import { Provider } from "react-redux";
import GlobalStyle from "../components/GlobalStyle";

const theme = {};

export default withRedux(initStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {})
        }
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Component {...pageProps} />
            <GlobalStyle />
          </Provider>
        </ThemeProvider>
      );
    }
  }
);
