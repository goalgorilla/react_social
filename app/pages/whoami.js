import axios from "axios";
import { connect } from "react-redux";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import { API_URL } from "../utils/constants";
import { withTranslation } from "../i18n";

// Temporary page to display the logged in user id

const Whoami = ({ id, username }) => (
  <Layout title="Who Am I">
    {(id && (
      <p>
        You are logged in as <strong>{username}</strong>({id}).
      </p>
    )) || <p>You are not authenticated.</p>}
  </Layout>
);

Whoami.getInitialProps = async ctx => {
  const username = ctx.store.getState().authentication.username;
  const id = ctx.store.getState().authentication.id;
  return {
    id,
    username,
    namespacesRequired: ["common", "header"]
  };
};

export default connect(state => state)(withTranslation()(Whoami));
