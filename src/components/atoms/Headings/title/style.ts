import styled, { css } from "styled-components";

type ContainerProps = {
  color: string|undefined
}

export const Container = styled.h1<ContainerProps>`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.primary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.sizes.xlarge};
  `}
`; 