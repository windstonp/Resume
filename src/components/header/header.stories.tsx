import { ThemeProvider } from "styled-components";
import { Header } from ".";
import { theme } from "../../global/styles/theme";
import 'jest-styled-components'

const HeaderStory = {
  title: 'Design System/molecules/Header',
  component: Header,
}

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);


export default HeaderStory