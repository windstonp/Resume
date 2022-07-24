import React from "react"
import { ThemeProvider } from "styled-components";
import { theme } from "../../../global/styles/theme";
import { NavList } from './'
const NavListStory = {
  component: NavList
}

export const Default = ()=>{
  return (
    <ThemeProvider theme={theme}>
      <NavList />
    </ThemeProvider>
  )
}

export default NavListStory;