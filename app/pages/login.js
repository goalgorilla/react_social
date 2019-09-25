import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";
import InputDescription from "../components/atoms/InputDescription";
import Label from "../components/atoms/Label";
import Title from "../components/atoms/Title";

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
        <Title>Log in</Title>
        <Input type={"password"} />
        <Button>Log in</Button>
        <Label required={true}>Username or email address</Label>
        <Label required={true}>Password</Label>
        <InputDescription>
          Enter your Open Social username or email.
        </InputDescription>
        <InputDescription link={true}>Forgot password?</InputDescription>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
