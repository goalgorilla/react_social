import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styled from 'styled-components';
import {deviceMinWidth} from '../utils/device';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

/* Layout used by all pages, containing:
 - <head> data
 - The <Header> of the site
 - A <Wrapper> for the content of the page
 - The <Footer> of the site

 This component also passes down whether the user is authenticated along with account details to child components. */
const Content = styled.div`
  padding-top: 3.125rem;
  margin-bottom: 5rem;
  min-height: calc(100vh - 100px);

  @media ${deviceMinWidth.tablet} {
    padding-top: 6.25rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

const Layout = ({children, title}) => (
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
      />
    </Head>
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer>Copyright © 2019. [Community name]. All rights reserved</Footer>
    </Wrapper>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
