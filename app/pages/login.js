import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import Button from "../components/atoms/Button";

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
        <Button text={"Log in"} />
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
