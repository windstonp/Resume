import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    html,
    body {
      font-family: satoshi, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.background[50]};
      button, label, input {
        font-family: inherit;
      }
    }

    body {
      color: ${theme.colors.tertiary};
      flex: 1;
    }

    ::-webkit-scrollbar {
      width: 0;
      height: 2px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background:${theme.colors.tertiary};
    }
  `}
`;

export default GlobalStyle;