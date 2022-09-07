import styled, { css } from "styled-components";

export const MutedText  = styled.p`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
  `}
`; 