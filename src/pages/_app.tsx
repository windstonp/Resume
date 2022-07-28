import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../global/styles/theme'
import GlobalStyles from "../global/globalstyle";
import { Header } from '../components/organisms/header';
import { Footer } from '../components/organisms/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
