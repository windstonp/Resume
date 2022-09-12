import styled, { css } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background[100]};
  padding: 15px 100px;

  @media only screen and (max-width: 425px){
    flex-direction: column;
  }
`

export const Content = styled.div`
  display: inherit;
  flex-direction: row;
  @media only screen and (max-width: 425px){
    flex-direction: column;

    :last-child{
      margin-top: 1.5rem;
    }
  }
`;

export const GroupElements = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 25px;

  &:last-child{
    margin-right: 0px;
  }

  h4{
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 425px){
    margin-top: 1.5rem;
  }
`