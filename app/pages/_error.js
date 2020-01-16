import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {withTranslation} from '../i18n';
import {API_URL} from '../utils/constants';
import {getCookie} from '../utils/cookie';
import Layout from '../components/Layout';
import {renderPage, parseResponse} from '../utils/htmlResponseParser';

// A custom error page displaying the error status code to the user and whether the error occured server side or client side
const ErrorMessage = styled.p`
  padding: ${props => props.theme.layout.padding};
`;

function Error({statusCode, htmlHead, htmlBody, svgs, scripts}) {
  // if the page is found on drupal then we render it
  if (statusCode === 200) {
    return renderPage(htmlHead, htmlBody, svgs, scripts);
    // if the page does not exist at all display an error message
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

  // if page does not exist on the React application then perform a GET request to the Drupal site to check if it exists there
  if (statusCode === 404) {
    return axios
      .get(API_URL + requestedUrl, {
        headers: {
          Authorization: 'Bearer ' + getCookie('token', ctx.req),
        },
      })
      .then(response => {
        const {head, body, svgs, scripts} = parseResponse(response);
        return {
          htmlBody: body,
          htmlHead: head,
          svgs,
          scripts,
          statusCode: 200,
          namespacesRequired,
        };
      })
      .catch(err => {
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
