import styled, { css } from 'styled-components'



export const Button = styled.button`
  ${({ theme }) => css`
    display: block;
    margin: 0;
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.semiBold};
    background-color: ${theme.colors.background[100] };
    color:  ${theme.colors.primary};
    padding: 8px 32px;
    min-width: 175px;
    border-width: ${theme.border.widths.medium};
    border-style: solid;
    cursor: pointer;
    border-color: ${theme.colors.primary};
    text-align: center;
    text-decoration: none;
    &:hover{
      transition: ${theme.transition.default};
      background-color: ${theme.colors.primary};
      color: ${theme.colors.background[100]} 
    }
    &:disabled{
      background-color: ${theme.colors.primary};
    }
  `};
`;
