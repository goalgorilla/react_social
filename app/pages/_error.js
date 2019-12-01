import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
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

Error.getInitialProps = ctx => {
  const statusCode = ctx.res
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404;
  return {statusCode, namespacesRequired: ['common', 'header']};
};

Error.propTypes = {
  statusCode: PropTypes.number,
};

export default withTranslation('header')(Error);
