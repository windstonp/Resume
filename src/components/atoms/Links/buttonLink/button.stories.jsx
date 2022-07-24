import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonLink } from '.';
import {theme} from '../../../../global/styles/theme';

const ButtonStory = {
  component: ButtonLink,
  argTypes:{
    label: { control: 'text', defaultValue: 'Button' }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <ButtonLink {...args}>{args.label}</ButtonLink>
  </ThemeProvider>
);


export default ButtonStory