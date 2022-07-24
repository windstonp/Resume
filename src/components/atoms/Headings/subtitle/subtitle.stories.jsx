import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Subtitle } from '.';
import {theme} from '../../../../global/styles/theme';

const SubtitleStory = {
  component: Subtitle,
  argTypes:{
    label: { control: 'text', defaultValue: 'Subtitle' },
    color: { control: 'color' }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <Subtitle {...args}>{args.label}</Subtitle>
  </ThemeProvider>
);


export default SubtitleStory