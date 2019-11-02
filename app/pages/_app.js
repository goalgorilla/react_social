import App, { Container } from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
import { Provider } from "react-redux";
import GlobalStyle from "../components/GlobalStyle";
import theme from "../components/Theme";
import initialize from "../utils/initialize";
import { appWithTranslation } from "../i18n";

export default withRedux(initStore)(
  appWithTranslation(
    class MyApp extends App {
      static async getInitialProps({ Component, ctx }) {
        initialize(ctx);
        return {
          pageProps: {
            ...(Component.getInitialProps
              ? await Component.getInitialProps(ctx)
              : {})
          }
        };
      }
      // render the app with the redux store, theme and globalstyle
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
  )
);
