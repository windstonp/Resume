import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  position: relative;
  background-color: ${({theme}) => theme.colors.background[50]};
  flex-direction: column;
  width: 100%;
  
`
export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const InnerContent = styled.div`
  flex: 1;


  a, p{
    margin-top: 50px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 50px;
`