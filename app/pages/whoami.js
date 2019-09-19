import axios from "axios";
import { connect } from "react-redux";
import { API } from "../config";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";

const Whoami = ({ user }) => (
  <Layout title="Who Am I">
    {(user && (
      <p>
        You are logged in as{" "}
        <strong className="is-size-2 has-text-primary">{user}</strong>.
      </p>
    )) || <p>You are not authenticated.</p>}
  </Layout>
);

Whoami.getInitialProps = async ctx => {
  initialize(ctx);
  const token = ctx.store.getState().authentication.token;
  if (token) {
    const response = await axios.get(`${API}/jsonapi`, {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    console.log(response);
    const user = response.data.meta.links.me.meta.id;
    return {
      user
    };
  }
};

export default connect(state => state)(Whoami);
