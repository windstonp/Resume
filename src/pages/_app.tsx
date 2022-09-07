import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../global/styles/theme'
import GlobalStyles from "../global/globalstyle";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon"
          type="image/png"
          href="/img/favicon.png" />
      </Head>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
