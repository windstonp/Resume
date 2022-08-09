import React from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "../../../global/styles/theme";
import { Menu } from '.'
const NavListStory = {
  component: Menu
}

export const Default = () => {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
    </ThemeProvider>
  )
}

export default NavListStory;