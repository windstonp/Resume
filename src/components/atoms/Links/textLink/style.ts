import styled, { css } from "styled-components";

type ContainerProps = {
  color: string|undefined
}

export const Container = styled.a<ContainerProps>`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.semiBold};
    font-size: ${theme.fonts.sizes.medium};
    text-decoration: none;
    text-align: center;

    &:hover{
      color: ${theme.colors.primary};
      transition: ${theme.transition.default}
    }
  `}
`; 