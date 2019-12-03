// test-utils.js
import React from 'react';
import PropTypes from 'prop-types';
import {render} from '@testing-library/react';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import theme from '../components/themes/theme';

const AllTheProviders = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {children}
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

AllTheProviders.propTypes = {
  children: PropTypes.node,
};

// re-export everything
export * from '@testing-library/react';

// override render method
export {customRender as render};
