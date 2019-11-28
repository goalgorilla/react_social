import Layout from '../components/Layout';
import initialize from '../utils/initialize';
import React from 'react';
import styled from 'styled-components';
import {withTranslation} from '../i18n';

// A custom error page displaying the error status code to the user and whether the error occured server side or client side

const ErrorMessage = styled.p``;

function Error({statusCode}) {
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

Error.getInitialProps = async ctx => {
  const statusCode = ctx.res
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404;
  return {statusCode, namespacesRequired: ['common', 'header']};
};

export default Error;
