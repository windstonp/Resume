import { Reveal } from 'components/Reveal';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const MoreOnGithub = styled(Reveal)`
  margin: 3rem auto;

  a:hover {
    filter: brightness(1.5);
  }
`;

export const Content = styled.div``;
