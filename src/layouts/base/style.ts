import styled from 'styled-components';

export const ContainerBase = styled.div`
  overflow: hidden;
  footer{
    padding: 2.5rem 10rem;

    @media only screen and (max-width: 768px){
      padding: 2.5rem 5rem;
    }

    
    @media only screen and (max-width: 425px) {
      padding: 2rem;
    }
  }
`;

export const ContentBase = styled.main`
  section {
    padding: 2.5rem 10rem;

    @media only screen and (max-width: 768px){
      padding: 2.5rem 5rem;
    }

    @media only screen and (max-width: 425px) {
      padding: 2rem;
    }
  }
`;