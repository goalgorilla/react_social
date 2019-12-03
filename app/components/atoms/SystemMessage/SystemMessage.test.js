import React from 'react';
import user from '@testing-library/user-event';
import {render} from 'test-utils';
import SystemMessage from './';

test('close button closes SystemMessage when clicked', () => {
  const {getByText, getByRole} = render(
    <SystemMessage>lorem ipsum</SystemMessage>,
  );
  const systemMessage = getByText(/lorem ipsum/i);
  expect(systemMessage).toBeInTheDocument();
  const closeButton = getByRole('button');
  user.click(closeButton);
  expect(systemMessage).not.toBeInTheDocument();
});
