import styled, { css } from 'styled-components'

type buttonProps = {
  isActive: boolean
}

export const Container = styled.a<buttonProps>`
  ${({ theme, isActive }) => css`
    display: inline-block;
    margin: 0 auto;
    font-family: ${theme.fonts.family};
    font-size: ${theme.fonts.sizes.medium};
    font-weight: ${theme.fonts.weight.normal};
    background-color: ${isActive ? theme.colors.background[100] : theme.colors.primary};
    color:  ${isActive ? theme.colors.primary: theme.colors.background[100]};
    padding: 8px 32px;
    border-width: ${theme.border.widths.medium};
    border-style: solid;
    cursor: pointer;
    border-color: ${theme.colors.primary};
    text-align: center;
    text-decoration: none;
    &:hover{
      transition: ${theme.transition.default};
    }
  `};
`;
