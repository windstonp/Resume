import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({theme})=>css` 
    font-family: ${theme.fonts.family};
    color: ${theme.colors.secondary};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.sizes.xlarge};
    text-decoration: none;
  `}
`;

export const TextDecorated = styled.span`
  ${({theme})=>css`
    font-family: ${theme.fonts.family};
    color: ${theme.colors.primary};
    font-size: inherit;
    font-weight: inherit;
  `}
`;