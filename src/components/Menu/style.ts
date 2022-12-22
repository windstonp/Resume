import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const NavBar = styled(motion.nav)`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.secondary};
    h3 {
      color: ${theme.colors.background[100]};
      cursor: pointer;
    }
  `}
`;

export const MenuContainer = styled(motion.div)`
  ${({ theme }) => css`
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    min-width: 425px;
    max-width: 30vw;
    height: 100vh;
    background: ${theme.colors.background[100]};
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 15vh 7.5vw 10vh 7.5vw;

    @media only screen and (max-width: 425px) {
      min-width: 100vw;
    }
  `}
`;

export const DividerMenuLine = styled.hr`
  ${({ theme }) => css`
    margin-top: 1.5em;
    border-color: ${theme.colors.tertiary};
  `}
`;

export const NavCollumn = styled.div``;

export const MenuDesktopContainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuDesktopItem = styled.li`
  ${({ theme }) => css`
    margin-right: 15px;
    :last-child {
      margin-right: 0px;
    }
    a {
      color: ${theme.colors.background[100]};
      text-decoration: none;
      font-size: ${theme.fonts.sizes.medium};
      :hover {
        color: ${theme.colors.background[50]};
        transition: ${theme.transition.default};
      }
    }
  `}
`;

export const ContainerNonFloatButtons = styled.div`
  width: 100%;
  text-align: right;
  padding: 2.5rem 10rem;
  h3 {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    h3 {
      display: block;
    }
    ul {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2.5rem 5rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 2rem;
  }
`;
