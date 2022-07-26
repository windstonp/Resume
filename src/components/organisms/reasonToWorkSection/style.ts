import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0 100px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

export const Content = styled.div`
  display: flex;
`;