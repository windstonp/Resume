import styled from 'styled-components';

export const Container = styled.div`
  padding: 25px 25px 25px 0;
  flex: 1;
  p {
    margin-top: 10px;
    text-align: right;
  }

  @media only screen and (max-width: 425px) {
    p {
      text-align: left;
    }
  }
`;
