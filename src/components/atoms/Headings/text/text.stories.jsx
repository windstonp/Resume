import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '.';
import {theme} from '../../../../global/styles/theme';

const TextStory = {
  component: Text,
  argTypes:{
    label: { control: 'text', defaultValue: 'Text' },
    color: { control: 'color' }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <Text {...args}>{args.label}</Text>
  </ThemeProvider>
);


export default TextStory