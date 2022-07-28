import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: inherit;
  flex-direction: row;
`;

export const GroupElements = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  &:last-child{
    margin-right: 0px;
  }
`

export const FooterSocialLinksContainer = styled.div``;

export const FooterTitle = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
  `}
`;

export const FooterText = styled.p`
  ${({theme}) => css`
    color: ${theme.colors.secondary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    font-weight: ${theme.fonts.weight.semiBold};
    text-decoration: none;
  `}
`;

export const FooterLink = styled.a`
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