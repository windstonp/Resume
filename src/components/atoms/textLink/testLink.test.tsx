import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TextLink } from '.';
import { theme } from '../../../global/styles/theme';
import 'jest-styled-components'

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

const renderAndGetComponent = ({ ...rest }: Object) => {
  render(
    <TextLink {...rest} data-testid="textLink">
      TextLink Component
    </TextLink>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('textLink');
}

describe('test TextLink Component', ()=>{
  
  it('should display text content', ()=>{
    const textLink = renderAndGetComponent({});
    expect(textLink.textContent).toBe('TextLink Component');
  });

  it('should have href prop',() =>{
    const textLink = renderAndGetComponent({href: '/teste'});
    expect(textLink.attributes).toHaveProperty('href');
    expect(textLink.getAttribute('href')).toBe('/teste');
  })

  it('should change default color when sending color prop',()=>{
    const textLink = renderAndGetComponent({ color: theme.colors.primary });
    expect(textLink.attributes).toHaveProperty('color');
    expect(textLink).toHaveStyleRule('color', theme.colors.primary);
  })
}) 