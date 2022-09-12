import { Reveal } from 'components/Reveal';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column ;
  position: relative;
  width: 100%;
`;

export const Content = styled(Reveal)`
  margin-top: 50px;
  display: flex;
  cursor: pointer;

  @media only screen and (max-width: 425px){
    flex-direction: column;
  }
`;