import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    background: ${theme.color.background.secondary};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    height: 100%;
  }
`;

export default GlobalStyle;
