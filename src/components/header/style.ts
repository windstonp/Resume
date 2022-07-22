import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const LogoText = styled.h1`
  ${({theme})=>css`
    color: ${theme.colors.secondary};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.sizes.xxlarge};
  `}
`;

export const LogoPoint = styled.span`
  ${({theme})=>css`
    color: ${theme.colors.primary};
    font-size: inherit;
    font-weight: inherit;
  `}
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
`;

export const NavListOption = styled.li`
  margin: 0 10px;
`;
