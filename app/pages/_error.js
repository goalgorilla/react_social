import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Head from 'next/head';
import {withTranslation} from '../i18n';
import {API_URL} from '../utils/constants';
import {getCookie} from '../utils/cookie';
import ReactHtmlParser from 'react-html-parser';
import DOMParser from '../utils/domparser';

// A custom error page displaying the error status code to the user and whether the error occured server side or client side
const ErrorMessage = styled.p`
  padding: ${props => props.theme.layout.padding};
`;

const DrupalContent = styled.div`
  margin: -50px 0 -100px 0;
`;

function createMarkup(html) {
  return {__html: html};
}

function Error({statusCode, htmlHead, htmlBody, svgs}) {
  if (statusCode === 200) {
    return (
      <Layout>
        <Head>{ReactHtmlParser(htmlHead)}</Head>
        <DrupalContent dangerouslySetInnerHTML={createMarkup(htmlBody)} />
        <div dangerouslySetInnerHTML={createMarkup(svgs)} />
      </Layout>
    );
  } else {
    return (
      <Layout title="Error | Open Social">
        <ErrorMessage>
          {statusCode
            ? `${statusCode} error occured on the server.`
            : 'An error occurred on client.'}
        </ErrorMessage>
      </Layout>
    );
  }
}

Error.getInitialProps = async ctx => {
  const requestedUrl = ctx.req.url;
  const statusCode = ctx.res
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404;

  const namespacesRequired = {namespacesRequired: ['common', 'header']};

  if (statusCode === 404) {
    return axios
      .get(API_URL + requestedUrl, {
        headers: {
          Authorization: 'Bearer ' + getCookie('token', ctx.req),
        },
      })
      .then(response => {
        // create document object model
        const dom = new DOMParser(response.data);
        const doc = dom.window.document;

        // remove search element
        var searchElement = doc.getElementsByClassName('region--content-top');
        if (searchElement[0]) {
          searchElement[0].parentNode.removeChild(searchElement[0]);
        }

        // set all links (incl. stylesheets) href to our drupal domain
        var styleSheets = doc.getElementsByTagName('link');
        for (var i = 0; i < styleSheets.length; i++) {
          if (!styleSheets[i].href.includes(API_URL)) {
            let oldHref = styleSheets[i].href;
            let newHref = API_URL + oldHref;
            styleSheets[i].href = newHref;
          }
        }

        // set all img src to our drupal domain
        var imgs = doc.getElementsByTagName('img');
        for (var i = 0; i < imgs.length; i++) {
          if (!imgs[i].src.includes(API_URL)) {
            let oldSrc = imgs[i].src;
            let newSrc = API_URL + oldSrc;
            imgs[i].src = newSrc;
          }
        }

        // set all script src to our drupal domain
        // var scripts = doc.getElementsByTagName('script');
        // for (var i = 0; i < scripts.length; i++) {
        //   if (!scripts[i].src.includes(API_URL)) {
        //     let oldSrc = scripts[i].src;
        //     let newSrc = API_URL + oldSrc;
        //     scripts[i].src = newSrc;
        //   }
        // }

        // set head, body
        const htmlHead = doc.head.innerHTML;
        const htmlBody = doc.getElementById('content').outerHTML;

        // set svgs
        const svgArray = doc.getElementsByTagName('svg');
        const svgs = svgArray[svgArray.length - 1].outerHTML;

        return {
          htmlBody: htmlBody,
          htmlHead: htmlHead,
          svgs: svgs,
          statusCode: 200,
          namespacesRequired,
        };
      })
      .catch(err => {
        console.log(err);
        return {statusCode: 404, namespacesRequired};
      });
  } else {
    return {statusCode, namespacesRequired};
  }
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default withTranslation('header')(Error);
