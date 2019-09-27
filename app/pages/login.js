import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import FormField from "../components/molecules/FormField";
import Card from "../components/organisms/Card";
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Form = styled.form`
  display flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 780px;
  flex: 0 0 66.66667%;
  
  button:last-child {
    margin-left: auto;
    margin-top: 20px;
  }
`;

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

  onChangeUsername(username) {
    this.setState({
      username: username
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password
    });
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
        <Wrapper>
          <Title>Log in</Title>
          <Form onSubmit={this.handleSubmit.bind(this)}>
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
                type={"text"}
                required={true}
                onChange={this.onChangeUsername.bind(this)}
                name={"username"}
              ></FormField>
              <FormField
                label={"Password"}
                description={"Forgot your password?"}
                link={true}
                type={"password"}
                required={true}
                name={"password"}
                onChange={this.onChangePassword.bind(this)}
              ></FormField>
            </Card>
            <Button type="submit">Log in</Button>
          </Form>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Login);
