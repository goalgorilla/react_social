import Layout from "../components/Layout";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import React from "react";
import styled from "styled-components";

// A custom error page displaying the error status code to the user and whether the error occured server side or client side

const ErrorMessage = styled.p``;

function Error({ statusCode }) {
  return (
    <Layout title="Error | Open Social">
      <ErrorMessage>
        {statusCode
          ? `${statusCode} error occured on the server.`
          : "An error occurred on client."}
      </ErrorMessage>
    </Layout>
  );
}

Error.getInitialProps = async ctx => {
  initialize(ctx);
  const statusCode = ctx.res
    ? ctx.res.statusCode
    : ctx.err
    ? ctx.err.statusCode
    : 404;
  return { statusCode };
};

export default connect(state => state)(Error);
