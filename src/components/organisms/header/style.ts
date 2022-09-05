import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled(motion.div)`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: ${ theme.colors.background[100] };
    z-index: 1;
  `}
`;