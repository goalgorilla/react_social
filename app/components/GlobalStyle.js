import { createGlobalStyle } from "styled-components";
import theme from "./Theme";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.color.background.secondary};
    margin: 0;
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
