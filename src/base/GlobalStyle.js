import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { _font } from './constants';

const GlobalStyle = createGlobalStyle`
  /* Reset the box-sizing, position and others */
  html {
    /* box-sizing: border-box; */
    min-width: 320px;
  }

  *,
  *:before,
  *:after {
    /* box-sizing: inherit; */
    /* Fix some resize in flexbox elements */
    min-width: 0;
    min-height: 0;
  }

  /* ::selection {
    color: #fff;
    background: ${rgba('#333', 0.99)};
  }

  ::-moz-selection {
    color: #fff;
    background: #333;
  } */

  /* *:focus {
    outline: none;
  } */

  body {
    /* background: #fff;
    color: #000;
    font-family: ${_font.primary};
    font-size: 16px;
    line-height: 1.6;
    font-weight: 400; */
    -webkit-font-smoothing: antialiased;
  }


  /* Links */
  /* a {
    color: blue;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  } */
`;

export default GlobalStyle;
