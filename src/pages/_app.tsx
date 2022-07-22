import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../global/styles/theme'
import GlobalStyles from "../global/globalstyle";
import { Header } from '../components/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
