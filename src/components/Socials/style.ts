import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  &:last-child{
    margin-right: 0px;
  }
`;

export const Title = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    margin-bottom: 1rem;
  `}
`;


export const Text = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.semiBold};
    text-decoration: none;
  `}
`;

export const Anchor = styled.a`
  ${({theme}) => css`
    color: ${theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.semiBold};
    text-decoration: none;
    margin-right: 25px;

    &:last-child{
      margin-right: 0px;
    }
    &:hover{
      color: ${theme.colors.primary };
      transition: ${theme.transition.default};
    }
  `}
`;