import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;

  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const InnerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem 3rem;
  grid-template-areas:
    '. .'
    '. .';

  div + div + div {
    border-top: 0;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      '.'
      '.'
      '.'
      '.';

    div:first-child {
      border-bottom: 0;
    }
  }
`;
