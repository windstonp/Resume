import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Satoshi-Light';
      src: url('/fonts/Satoshi-Light.woff2') format('woff2'),
          url('/fonts/Satoshi-Light.woff') format('woff'),
          url('/fonts/Satoshi-Light.ttf') format('truetype');
          font-weight: 300;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Satoshi-Regular';
      src: url('/fonts/Satoshi-Regular.woff2') format('woff2'),
          url('/fonts/Satoshi-Regular.woff') format('woff'),
          url('/fonts/Satoshi-Regular.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Satoshi-Medium';
      src: url('/fonts/Satoshi-Medium.woff2') format('woff2'),
          url('/fonts/Satoshi-Medium.woff') format('woff'),
          url('/fonts/Satoshi-Medium.ttf') format('truetype');
          font-weight: 500;
          font-display: swap;
          font-style: normal;
    }


    @font-face {
      font-family: 'Satoshi-Bold';
      src: url('/fonts/Satoshi-Bold.woff2') format('woff2'),
          url('/fonts/Satoshi-Bold.woff') format('woff'),
          url('/fonts/Satoshi-Bold.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
          font-style: normal;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @media (max-width: 1080px) {
      html: {
        font-size: 93.75%;
      }
    }

    @media (max-width: 720px) {
      html: {
        font-size: 87.5%;
      }
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