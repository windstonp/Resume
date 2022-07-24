import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '.';
import { theme } from '../../../global/styles/theme';

const HeaderStory = {
  component: Header
};

export const Default = () => (
  <ThemeProvider theme={theme}>
    <Header/>
  </ThemeProvider>
);


export default HeaderStory