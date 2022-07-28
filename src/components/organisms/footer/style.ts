import styled from 'styled-components';


export const Container = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background[100]};
  padding: 15px 100px;

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`