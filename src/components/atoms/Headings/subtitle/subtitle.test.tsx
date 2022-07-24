import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Subtitle } from '.';
import { theme } from '../../../../global/styles/theme';
import 'jest-styled-components';


const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

const renderAndGetComponent = ({ ...rest }: Object) => {
  render(
    <Subtitle {...rest} data-testid="Subtitle">
      Subtitle Component
    </Subtitle>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('Subtitle');
}

describe('test Subtitle Component', ()=>{
  
  it('should display text content', ()=>{
    const subtitle = renderAndGetComponent({});
    expect(subtitle.textContent).toBe('Subtitle Component');
  });

  it('should change default color when sending color prop',()=>{
    const subtitle = renderAndGetComponent({ color: theme.colors.primary });
    expect(subtitle.attributes).toHaveProperty('color');
    expect(subtitle).toHaveStyleRule('color', theme.colors.primary);
    expect(subtitle).toHaveStyleRule('text-decoration', 'underline');

  })
}) 