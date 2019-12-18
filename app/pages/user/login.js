import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Layout from '../../components/Layout';
import Card from '../../components/organisms/Card';
import CardHeader from '../../components/atoms/CardHeader';
import CardBody from '../../components/atoms/CardBody';
import CardFooter from '../../components/atoms/CardFooter';
import Title from '../../components/atoms/Title';
import RaisedButton from '../../components/atoms/RaisedButton';
import SystemMessage from '../../components/atoms/SystemMessage';
import BlockFormField from '../../components/molecules/BlockFormField';
import InputLabel from '../../components/atoms/InputLabel';
import Input from '../../components/atoms/Input';
import InputDescription from '../../components/atoms/InputDescription';
import {withTranslation} from '../../i18n';
import {useUser, useDispatchUser} from '../../components/auth/userContext';
import {loginCall} from '../../components/auth/loginCall';

const Wrapper = styled.div`
  margin: auto;
  padding: ${props => props.theme.layout.padding};
  max-width: ${props => props.theme.layout.maxWidth};
`;

const Form = styled.form`
  max-width: 48.75rem;
  button:last-child {
    float: right;
    margin-top: 1.25rem;
  }
`;

function Login() {
  const user = useUser();
  const dispatch = useDispatchUser();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  // after render, if there is an error in props then:
  // set error to true to display SystemMessage and clear error from store
  useEffect(() => {
    if (user.error && !error) {
      setError(true);
    }
  }, [user.error, error]);

  const handleSubmit = e => {
    setError(false);
    e.preventDefault();
    loginCall(username, password)
      .then(res => {
        dispatch({
          type: 'LOGIN',
          payload: res,
        });
        Router.push('/');
      })
      .catch(err => {
        setError(true);
        dispatch({
          type: 'LOGIN_ERROR',
          payload: {error: err.message},
        });
      });
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
                <InputLabel forInput="username" required={true}>
                  Username or email address
                </InputLabel>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  id="username"
                  onChange={e => setUsername(e.target.value)}
                  required
                />
                <InputDescription>
                  Enter your Open Social username or email.
                </InputDescription>
              </BlockFormField>
              <BlockFormField>
                <InputLabel forInput="password" required={true}>
                  Password
                </InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
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
          <RaisedButton
            variant="primary"
            radius="small"
            paddingHorizontal="xl"
            type="submit"
            fontWeight="bold"
          >
            Log in
          </RaisedButton>
        </Form>
      </Wrapper>
    </Layout>
  );
}

Login.getInitialProps = () => ({
  namespacesRequired: ['common', 'header'],
});

export default withTranslation()(Login);
