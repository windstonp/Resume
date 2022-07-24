import styled, { css } from "styled-components";

type ContainerProps = {
  color: string|undefined
}

export const Container = styled.h3<ContainerProps>`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.semiBolds};
    font-size: ${theme.fonts.sizes.medium};
    text-decoration: ${color ? 'underline' : ''};
  `}
`; 