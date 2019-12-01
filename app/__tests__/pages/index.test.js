import React from 'react';
import {render} from '@testing-library/react';

import App from '../../pages/index';

describe('With React Testing Library', () => {
  it('Shows "Hello world!"', () => {
    const {getByText} = render(<App />);

    expect(getByText('Hello World!')).not.toBeNull();
  });
});

describe('With React Testing Library Snapshot', () => {
  it('Should match Snapshot', () => {
    const {asFragment} = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
