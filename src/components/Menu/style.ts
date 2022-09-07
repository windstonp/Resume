import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const NavBar = styled(motion.nav)`
  ${({theme}) => css`
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${theme.colors.secondary};
    padding: 15px 100px;
    @media (max-width: 768px) {
      padding: 0 25px;
    }
    h3{
      color: ${theme.colors.background[100]};
      cursor: pointer;

    }
    
  `}
`;

export const MenuContainer = styled(motion.div)`
  ${({theme}) => css`
    position: fixed;
    right: 0;
    bottom: 0;
    width: 100vw;
    max-width: 425px;
    height: 100vh;
    background: ${ theme.colors.background[100] };
    z-index: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    padding: 15vh 7.5vw 10vh 7.5vw;
  `}
`;

export const DividerMenuLine = styled.hr`
  ${({theme}) => css`
    margin-top: 1.5em;
    border-color: ${theme.colors.tertiary};
  `}
`

export const NavCollumn = styled.div`

`