import React from 'react';
import user from '@testing-library/user-event';
import {render} from 'test-utils';
import {act} from 'react-dom/test-utils';
import {UserProvider} from '../components/auth/userContext';
import {
  API_URL,
  GRANT_TYPE,
  CLIENT_ID,
  CLIENT_SECRET,
} from '../utils/constants';
import {loginCall as mockLoginCall} from '../components/auth/loginCall';
import Login from './Login';

jest.mock('../components/auth/loginCall');

test('User can login using form', () => {
  mockLoginCall.mockResolvedValueOnce();
  const initialState = {
    isLoggedIn: false,
    token: '',
    username: '',
    id: '',
    avatar: '',
  };

  act(() => {
    const {getByRole, getByLabelText} = render(
      <UserProvider state={initialState}>
        <Login />
      </UserProvider>,
    );
    const usernameInput = getByLabelText(/username*/i);
    user.type(usernameInput, 'mock_user');

    const passwordInput = getByLabelText(/password/i);
    user.type(passwordInput, 'mock_password');

    const loginButton = getByRole('button');

    user.click(loginButton);
  });

  const mockFormData = new FormData();
  mockFormData.set('grant_type', GRANT_TYPE);
  mockFormData.set('client_id', CLIENT_ID);
  mockFormData.set('client_secret', CLIENT_SECRET);
  mockFormData.set('username', /mock_user/i);
  mockFormData.set('password', /mock_password/i);

  expect(mockLoginCall).toHaveBeenCalledWith(
    `${API_URL}/oauth/token/`,
    mockFormData,
  );
  expect(mockLoginCall).toHaveBeenCalledTimes(1);
});

test('User is shown error message on incorrect login', () => {});
