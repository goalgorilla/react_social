import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const ErrorMessage = styled.p``;

function Error({ statusCode }) {
  return (
    <Layout title="${statusCode} Error | Open Social">
      <ErrorMessage>
        {statusCode
          ? `${statusCode} error occured on the server.`
          : "An error occurred on client."}
      </ErrorMessage>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
