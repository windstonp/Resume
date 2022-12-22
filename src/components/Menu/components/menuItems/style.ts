import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.li)`
  padding: 10px 0px;
`;

export const LinkText = styled.a`
  ${({ theme, color }) => css`
    color: ${color || theme.colors.secondary};
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.bold};
    font-size: ${theme.fonts.sizes.xlarge};
    text-decoration: none;
  `}
`;
