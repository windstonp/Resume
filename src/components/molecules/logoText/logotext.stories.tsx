import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LogoText } from '.';
import { theme } from '../../../global/styles/theme';

const LogoTextStory = {
  component: LogoText,
  argTypes: {
    initialText: { control: 'text', defaultValue: 'J' },
    decoratedText: { control: 'text', defaultValue: '.' },
    finalText: { control: 'text', defaultValue: ' Alves' }
  }
}

export const Default = (args: any)=>{
  return (
    <ThemeProvider theme={theme}>
      <LogoText
        {...args}
      />
    </ThemeProvider>
  )
}

export default LogoTextStory;