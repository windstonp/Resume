import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
 
`

export const Content = styled(motion.div)`
  display: flex;

  @media only screen  and (max-width: 650px){
    flex-direction: column;
  }
`;