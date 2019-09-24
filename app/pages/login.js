import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import InputDescription from "../components/atoms/InputDescription";
import Label from "../components/atoms/Label";

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
        <Input />
        <Button text={"Log in"} />
        <Label text={"Username or email address"} required={true} />
        <Label text={"Password"} required={true} />
        <InputDescription text={"Enter your Open Social username or email."} />
        <InputDescription text={"Forgot password?"} link={true} />
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
