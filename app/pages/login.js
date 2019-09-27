import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import FormField from "../components/molecules/FormField";
import Card from "../components/organisms/Card";
import Title from "../components/atoms/Title";
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
        <Title>Log in</Title>
        <Card
          header={
            <div>
              Log in with <b>username</b> or <b>email</b>
            </div>
          }
          footer={
            <div>
              Don't have an account yet? <b>Sign Up</b>
            </div>
          }
        >
          <FormField
            label={"Username or email address"}
            description={"Enter your Open Social username or email."}
            required={true}
          ></FormField>
          <FormField
            label={"Password"}
            description={"Forgot your password?"}
            link={true}
            type={"password"}
            required={true}
          ></FormField>
        </Card>
        <Button>Log in</Button>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
