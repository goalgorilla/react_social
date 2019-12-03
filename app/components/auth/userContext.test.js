import React from 'react';
import user from '@testing-library/user-event';
import {render} from 'test-utils';
import {UserProvider, useUser, useDispatchUser} from './userContext';

const TestComponent = () => {
  const mockUser = useUser();
  const dispatch = useDispatchUser();

  const toggleAuth = () => {
    if (mockUser.isLoggedIn) {
      dispatch({type: 'LOGOUT'});
    } else {
      dispatch({
        type: 'LOGIN',
        payload: {isLoggedIn: true, username: 'fake_user'},
      });
    }
  };

  return (
    <div>
      {mockUser.username} {mockUser.isLoggedIn ? 'logged in' : 'logged out'}
      <button onClick={() => toggleAuth()}>toggleAuth</button>
    </div>
  );
};

const initialState = {
  isLoggedIn: false,
  username: 'anonymous',
};

test('UserProvider exposes the user context', () => {
  const {getByText} = render(
    <UserProvider state={initialState}>
      <TestComponent />
    </UserProvider>,
  );
  expect(getByText(/anonymous/i)).toBeInTheDocument();
});

test('UserProvider exposes the login/logout functions', () => {
  const {getByText, getByRole} = render(
    <UserProvider state={initialState}>
      <TestComponent />
    </UserProvider>,
  );
  expect(getByText(/logged out/i)).toBeInTheDocument();

  const authButton = getByRole('button');
  user.click(authButton);
  expect(getByText(/fake_user/i)).toBeInTheDocument();
  expect(getByText(/logged in/i)).toBeInTheDocument();

  user.click(authButton);
  expect(getByText(/logged out/i)).toBeInTheDocument();
});
