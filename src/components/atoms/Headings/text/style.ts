import styled, { css } from "styled-components";

type ContainerProps = {
  color: string|undefined
}

export const Container = styled.p<ContainerProps>`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
  `}
`; 