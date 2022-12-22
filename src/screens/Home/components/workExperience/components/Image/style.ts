import styled from 'styled-components';

export const ImageContainer = styled.div`
  flex: 1.75;
  position: relative;

  @media only screen and (max-width: 425px) {
    flex: auto;
    height: 150px;
  }
`;
