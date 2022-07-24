import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ButtonLink } from '.';
import { theme } from '../../../../global/styles/theme';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components';


const AppProvider: React.FC = ({children}) => {
  return(
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)};
const renderAndGetButton = ({...rest}: Object) => {
  render(
    <ButtonLink
      data-testid='buttonComponent'
      {...rest}
    >
      Button
    </ButtonLink>,
    {
      wrapper: AppProvider
    }
  )

  return screen.getByTestId('buttonComponent');
}

describe('Test Button Component', ()=>{
  it('should have title of button', ()=>{
    const button = renderAndGetButton({});

    expect(button.textContent).toBe('Button');
  });

  it('should change background color on mouseEvents', () => {

    const button = renderAndGetButton({});
    expect(button).toHaveStyleRule('background-color', theme.colors.primary);
    fireEvent.mouseOver(button);
    expect(button).toHaveStyleRule('background-color',theme.colors.background[100]);
    fireEvent.mouseLeave(button);
    expect(button).toHaveStyleRule('background-color', theme.colors.primary);

  });

  it('should have the right border width', () => {

    const button = renderAndGetButton({});
    expect(button).toHaveStyleRule('border-width', theme.border.widths.medium);
  });

  it('should have href prop', () => {
    const button = renderAndGetButton({ href: '/teste' });
    expect(button.attributes).toHaveProperty('href');
    expect(button.getAttribute('href')).toBe('/teste');
  })

});