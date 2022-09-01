import styled, { css } from "styled-components";


export const Container = styled.h3`
  ${({theme, color})=> css`
    color: ${color ? color : theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.semiBold};
    font-size: ${theme.fonts.sizes.medium};
    text-decoration: none;
  `}
`; 