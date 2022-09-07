import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  ${({theme}) => css`
    position: fixed;
    right: 0;
    width: 100vw;
    max-width: 425px;
    height: 100vh;
    background: ${ theme.colors.background[100] };
    z-index: 1;

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