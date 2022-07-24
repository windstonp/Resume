import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Title } from '.';
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
    <Title {...rest} data-testid="title">
      title Component
    </Title>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('title');
}

describe('test Title Component', ()=>{
  
  it('should display text content', ()=>{
    const title = renderAndGetComponent({});
    expect(title.textContent).toBe('title Component');
  });

  it('should change default color when sending color prop',()=>{
    const title = renderAndGetComponent({ color: theme.colors.primary });
    expect(title.attributes).toHaveProperty('color');
    expect(title).toHaveStyleRule('color', theme.colors.primary);
  })
}) 