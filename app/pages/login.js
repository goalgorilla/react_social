import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import actions from "../redux/actions";
import Layout from "../components/Layout";
import Card from "../components/organisms/Card";
import CardHeader from "../components/atoms/CardHeader";
import CardBody from "../components/atoms/CardBody";
import CardFooter from "../components/atoms/CardFooter";
import Title from "../components/atoms/Title";
import RaisedButton from "../components/atoms/RaisedButton";
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

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // after render, if there is an error in props then:
  // set error to true to display SystemMessage and clear error from store
  useEffect(() => {
    if (props.authentication.error && !error) {
      setError(true);
      props.clearAuthenticationStore();
    }
  });

  const handleSubmit = e => {
    setError(false);
    e.preventDefault();
    props.authenticate({ username: username, password: password }, "login");
  };

  return (
    <Layout title="Login | Open Social">
      <Wrapper>
        <Title>Log in</Title>
        {error && (
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
            To solve the issue, try using different login information, try again
            later, or <b>request a new password</b>
          </SystemMessage>
        )}
        <Form onSubmit={handleSubmit}>
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
                  value={username}
                  onChange={e => setUsername(e.target.value)}
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
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
          <RaisedButton variant="primary" radius="small" paddingHorizontal="xl" type="submit"><strong>Log in</strong></RaisedButton>
        </Form>
      </Wrapper>
    </Layout>
  );
}

export default connect(state => state, actions)(Login);
