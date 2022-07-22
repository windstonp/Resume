import React from 'react'
import { ThemeProvider } from 'styled-components';
import { theme } from '../../global/styles/theme';
import { Header } from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
};

const renderAndGetComponent = () => {
  render(
    <Header data-testid="header"/>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('header');
}

describe('Header Tests', ()=>{
  it('should render correctly',()=>{
    const header = renderAndGetComponent();
    expect(header).toBeInTheDocument();
  })
});