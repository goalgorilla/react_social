import {createGlobalStyle} from 'styled-components';
import {deviceMaxWidth} from '../utils/device';
import theme from './themes/theme';

// A styled components GlobalStyle file. Used for applying a styles globally across the app.
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    min-height: 100%;
    background: ${theme.color.background.secondary};
    color: ${theme.color.foreground.primary};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.weight.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    height: 100%;
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
  }
  @media ${deviceMaxWidth.tablet}{
    html {
      font-size: 14px;  
    }
  }
`;

export default GlobalStyle;
