import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";

// TEMP
import Layout from "../components/Layout";
import FormField from "../components/molecules/FormField";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.authenticate(
      { username: this.state.username, password: this.state.password },
      "login"
    );
  }

  render() {
    return (
      <Layout title="Login | Open Social">
        <FormField
          label={"Username or email address"}
          description={"Enter your Open Social username or email."}
          required={true}
        ></FormField>
        <FormField
          label={"Password"}
          description={"Forgot your password?"}
          link={true}
          type={"password"}
          required={true}
        ></FormField>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
