import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../global/styles/theme';
import { LogoText } from '.';
import 'jest-styled-components';
import '@testing-library/jest-dom';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

const renderAndGetMainComponent = () =>{
  render(<LogoText 
      initialText='J' 
      decoratedText='.' 
      finalText=' Alves' 
    />, {
    wrapper: AppProvider
  });

  return screen.getByTestId('logoText');
}

describe('Logo Text Component', ()=>{
  it('should display component on document',()=>{
    const logoText = renderAndGetMainComponent();

    expect(logoText).toBeInTheDocument();
  });

  it('should display correct text', ()=>{
    const logoText = renderAndGetMainComponent();

    expect(logoText.textContent).toBe('J. Alves');
  });
})