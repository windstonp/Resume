import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../global/styles/theme'
import GlobalStyles from "../global/globalstyle";
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import 'react-toastify/dist/ReactToastify.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon"
          type="image/png"
          href="/img/favicon.png" />
        <meta name="description" content="Full-Stack developer based in Brazil" />
        <meta name="application-name" content="João Vitor Assunção Alves" />
        <meta name="theme-color" content={theme.colors.primary} />

      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
      {process.env.NODE_ENV !== 'development' && <Analytics />}
    </ThemeProvider>
  )
}

export default MyApp
