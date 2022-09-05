import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.ul)`
  list-style: none;
  width: 100%;
  
  padding: 25px 100px;
  @media (max-width: 768px) {
    padding: 25px;
  }
`