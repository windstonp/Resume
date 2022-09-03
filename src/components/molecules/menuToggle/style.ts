import styled, { css } from "styled-components"
import {motion} from "framer-motion";

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 100px;
  top: 25px;

  z-index: 1;

  @media only screen and (max-width: 768px){
    right: 25px;
  }
`;

export const Svg = styled.svg`
  width: 23px;
  height: 23px;
  transform: translateY(25%) translateX(1%);
`

export const Path = styled(motion.path)`
  ${({theme}) => css`
    fill: transparent;
    stroke: ${theme.colors.background[100]};
    stroke-width: 3px;
    stroke-linecap: round;

  `}
`

export const Background = styled(motion.div)`
  ${({theme}) => css`
    background: ${theme.colors.primary};
    height: 50px;
    width: 50px;
    z-index: -1;
    border-radius: 50px;
    position: absolute;
  `}
`;

export const Button = styled.button`
  background: none;
  border: 0;
`