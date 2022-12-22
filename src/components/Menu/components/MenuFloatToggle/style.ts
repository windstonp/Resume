import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 100px;
    top: 25px;
    cursor: pointer;
    z-index: 1;
    background: ${theme.colors.primary};
    padding: 1rem;
    border-radius: 100%;
    @media only screen and (max-width: 768px) {
      right: 25px;
    }
  `};
`;

export const Svg = styled.svg`
  width: 23px;
  height: 23px;
`;

export const Path = styled(motion.path)`
  ${({ theme }) => css`
    fill: transparent;
    stroke: ${theme.colors.background[100]};
    stroke-width: 3px;
    stroke-linecap: round;
  `}
`;
