import styled, { css } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background[100]};
  padding: 15px 100px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

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