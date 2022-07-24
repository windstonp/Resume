import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Title } from '.';
import {theme} from '../../../../global/styles/theme';

const TitleStory = {
  component: Title,
  argTypes:{
    label: { control: 'text', defaultValue: 'Title' },
    color: { control: 'color', defaultValue: theme.colors.primary }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <Title {...args}>{args.label}</Title>
  </ThemeProvider>
);


export default TitleStory