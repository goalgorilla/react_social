import { createGlobalStyle } from "styled-components";

// Theme from API placeholder
import themeData from "../static/theme.json";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${themeData.style.backgroundColor.secondary};
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
