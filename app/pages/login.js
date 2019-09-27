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
import SystemMessage from "../components/atoms/SystemMessage";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 780px;
  flex: 0 0 66.66667%;
`;

const Form = styled.form`
  display flex;
  flex-direction: column;
  justify-content: space-between;

  
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
      password: "",
      systemMessageVisible: false
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  componentDidMount() {
    this.setState({
      systemMessageVisible: false
    });
  }

  componentDidUpdate() {
    if (this.props.authentication.error && !this.state.systemMessageVisible) {
      this.setState({
        systemMessageVisible: true
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
          {this.state.systemMessageVisible && (
            <SystemMessage>
              Oops, there was an error. This may have happened for the following
              reasons:
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
