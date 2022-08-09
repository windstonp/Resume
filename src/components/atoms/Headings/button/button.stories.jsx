import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '.';
import {theme} from '../../../../global/styles/theme';

const ButtonStory = {
  component: Button,
  argTypes:{
    label: { control: 'text', defaultValue: 'Button' }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>{args.label}</Button>
  </ThemeProvider>
);


export default ButtonStory