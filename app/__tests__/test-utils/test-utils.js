// test-utils.js
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../components/GlobalStyle";
import theme from "../../components/Theme";

// Redux
import reducer from "../../redux/reducers";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { initialState } from "../../redux/reducers/authReducer.js";
import thunk from "redux-thunk";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider
        store={createStore(reducer, initialState, applyMiddleware(thunk))}
      >
        {children}
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };