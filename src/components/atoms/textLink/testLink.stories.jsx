import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TextLink } from '.';
import {theme} from '../../../global/styles/theme';

const TextLinkStory = {
  title: 'Design System/Atoms/TextLink',
  component: TextLink,
  argTypes:{
    label: { control: 'text', defaultValue: 'TextLink' },
    color: { control: 'color', defaultValue: theme.colors.secondary }
  }
};

export const Default = (args) => (
  <ThemeProvider theme={theme}>
    <TextLink {...args}>{args.label}</TextLink>
  </ThemeProvider>
);


export default TextLinkStory