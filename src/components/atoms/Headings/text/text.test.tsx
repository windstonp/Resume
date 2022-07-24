import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from '.';
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
    <Text {...rest} data-testid="Text">
      Text Component
    </Text>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('Text');
}

describe('test Text Component', ()=>{
  
  it('should display text content', ()=>{
    const text = renderAndGetComponent({});
    expect(text.textContent).toBe('Text Component');
  });

  it('should change default color when sending color prop', () => {
    const subtitle = renderAndGetComponent({ color: theme.colors.primary });
    expect(subtitle.attributes).toHaveProperty('color');
    expect(subtitle).toHaveStyleRule('color', theme.colors.primary);
  })
}) 