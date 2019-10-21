import React from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import initialize from "../utils/initialize";
import Layout from "../components/Layout";
import Card from "../components/organisms/Card";
import CardHeader from "../components/atoms/CardHeader";
import CardBody from "../components/atoms/CardBody";
import CardFooter from "../components/atoms/CardFooter";
import Title from "../components/atoms/Title";
import Button from "../components/atoms/Button";
import styled from "styled-components";
import SystemMessage from "../components/atoms/SystemMessage";
import BlockFormField from "../components/molecules/BlockFormField";
import Label from "../components/atoms/Label";
import Input from "../components/atoms/Input";
import InputDescription from "../components/atoms/InputDescription";

const Wrapper = styled.div`
  flex: 0 0 66.66667%;
  flex-direction: column;
  display: flex;
  max-width: 48.75rem;
`;

const Form = styled.form`
  flex-direction: column;
  justify-content: space-between;
  display flex;

  button:last-child {
    margin-left: auto;
    margin-top: 1.25rem;
  }
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };
  }

  static getInitialProps(ctx) {}

  componentDidMount() {
    this.setState({
      error: false
    });
  }

  componentDidUpdate() {
    if (this.props.authentication.error && !this.state.error) {
      this.setState({
        error: true
      });
      this.props.clearAuthenticationStore();
    }
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
    this.setState({
      error: false
    });
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
          {this.state.error && (
            <SystemMessage>
              Oops, there was an error. This may have happened for the following
              reasons:
              <br />
              <br />- Invalid username/email and password combination.
              <br />- There has been more than one failed login attempt for this
              account. It is temporarily blocked.
              <br />- Too many failed login attempts from your computer (IP
              address). This IP address is temporarily blocked.
              <br />
              <br />
              To solve the issue, try using different login information, try
              again later, or <b>request a new password</b>
            </SystemMessage>
          )}
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Card>
              <CardHeader>
                <div>
                  Log in with <b>username</b> or <b>email</b>
                </div>
              </CardHeader>
              <CardBody>
                <BlockFormField>
                  <Label required={true}>Username or email address</Label>
                  <Input
                    type="text"
                    name="username"
                    onChange={this.onChangeUsername.bind(this)}
                    required
                  ></Input>
                  <InputDescription>
                    Enter your Open Social username or email.
                  </InputDescription>
                </BlockFormField>
                <BlockFormField>
                  <Label required={true}>Password</Label>
                  <Input
                    type="password"
                    name="username"
                    onChange={this.onChangePassword.bind(this)}
                    required
                  ></Input>
                  <InputDescription link={true}>
                    Forgot your password?
                  </InputDescription>
                </BlockFormField>
              </CardBody>
              <CardFooter>
                <div>
                  Don't have an account yet? <b>Sign Up</b>
                </div>
              </CardFooter>
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
