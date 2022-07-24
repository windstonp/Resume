import { render, screen } from '@testing-library/react';
import React from 'react';
import { NavList } from '.';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../global/styles/theme';
import 'jest-styled-components';
import '@testing-library/jest-dom';

const AppWrapper: React.FC = ({children})=>{
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

const renderAndGetComponent = () =>{
  render(<NavList/>,{
    wrapper: AppWrapper
  });

  return screen.getByTestId('navListComponent')
}

describe('NavList Test',()=>{
  it('should contain buttonLink Component',()=>{
    const navList = renderAndGetComponent();
    expect(navList).toBeInTheDocument();

  })
})