import App from 'next/app';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/themes/theme';
import {UserProvider} from '../components/auth/userContext';
import {getCookie} from '../utils/cookie';
import {appWithTranslation} from '../i18n';

class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    // Initial userContext state
    let userData = {
      isLoggedIn: false,
      token: '',
      username: '',
      id: '',
      avatar: '',
    };
    // Get userContext state from cookies
    if ((ctx.isServer && ctx.req.headers.cookie) || !ctx.isServer) {
      if (getCookie('token', ctx.req)) {
        userData = {
          isLoggedIn: true,
          token: getCookie('token', ctx.req),
          username: decodeURI(getCookie('username', ctx.req)),
          id: getCookie('id', ctx.req),
          avatar: getCookie('avatar', ctx.req),
        };
      }
    }
    return {
      userData,
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
      },
    };
  }
  // render the app with the user provider, theme and globalstyle
  render() {
    const {Component, pageProps, userData} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <UserProvider state={userData}>
          <Component {...pageProps} />
          <GlobalStyle />
        </UserProvider>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(MyApp);
