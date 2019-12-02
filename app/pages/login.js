import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import axios from 'axios';
import Layout from '../components/Layout';
import Card from '../components/organisms/Card';
import CardHeader from '../components/atoms/CardHeader';
import CardBody from '../components/atoms/CardBody';
import CardFooter from '../components/atoms/CardFooter';
import Title from '../components/atoms/Title';
import RaisedButton from '../components/atoms/RaisedButton';
import SystemMessage from '../components/atoms/SystemMessage';
import BlockFormField from '../components/molecules/BlockFormField';
import InputLabel from '../components/atoms/InputLabel';
import Input from '../components/atoms/Input';
import InputDescription from '../components/atoms/InputDescription';
import {withTranslation} from '../i18n';
import {useUser, useDispatchUser} from '../components/auth/userContext';
import {setCookie} from '../utils/cookie';
import {
  API_URL,
  GRANT_TYPE,
  CLIENT_ID,
  CLIENT_SECRET,
} from '../utils/constants';

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
    const data = {
      token: '',
      username: '',
      id: '',
      avatar: '',
    };

    const bodyFormData = new FormData();
    bodyFormData.set('grant_type', GRANT_TYPE);
    bodyFormData.set('client_id', CLIENT_ID);
    bodyFormData.set('client_secret', CLIENT_SECRET);
    bodyFormData.set('username', username);
    bodyFormData.set('password', password);

    axios
      // Obtain login token using the user's username and password
      .post(`${API_URL}/oauth/token/`, bodyFormData)
      .then(response => {
        // store token
        const token = response.data.access_token;
        data.token = token;
        setCookie('token', token);
        // Obtain the user's id to be used for getting information about the user
        return axios.get(`${API_URL}/jsonapi`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      })
      .then(response => {
        // store id
        const id = response.data.meta.links.me.meta.id;
        data.id = id;
        setCookie('id', id);
        // Obtain the user's username using the user's id
        return axios.get(`${API_URL}/jsonapi/user/user/${id}`, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
      })
      .then(response => {
        // store username
        const name = decodeURI(response.data.data.attributes.name);
        data.username = name;
        setCookie('username', name);
        // url to get avatar id
        const profileUrl =
          response.data.data.relationships.profile_profiles.links.related.href;
        // Obtain the user's avatar id
        return axios.get(profileUrl, {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
      })
      .then(response => {
        // store user avatar id if it exists otherwise set as null
        const avatarId = response.data.data.relationships.field_profile_image
          .data
          ? response.data.data.relationships.field_profile_image.data.id
          : false;

        if (avatarId) {
          return axios
            .get(`${API_URL}/jsonapi/file/file/${avatarId}`, {
              headers: {
                Authorization: `Bearer ${data.token}`,
              },
            })
            .then(avatarResponse => {
              // Store the avatar url
              const imageUrl = avatarResponse.data.data.attributes.uri.url;
              data.avatar = imageUrl;
              setCookie('avatar', imageUrl);
            });
        } else {
          data.avatar = '';
          setCookie('avatar', '');
        }
      })
      .then(() => {
        dispatch({
          type: 'LOGIN',
          payload: data,
        });
        Router.push('/whoami');
      })
      .catch(err => {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: {error: err.response.status},
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
                <InputLabel required={true}>
                  Username or email address
                </InputLabel>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
                <InputDescription>
                  Enter your Open Social username or email.
                </InputDescription>
              </BlockFormField>
              <BlockFormField>
                <InputLabel required={true}>Password</InputLabel>
                <Input
                  type="password"
                  name="password"
                  value={password}
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
