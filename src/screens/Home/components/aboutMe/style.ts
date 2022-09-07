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
  @media only screen and (max-width: 650px){
    flex-direction: column-reverse;
  }
`;

export const InnerContent = styled.div`
  flex: 1;


  a{
    margin-top: 50px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 30px;

  @media only screen and (max-width: 650px){
    display: flex;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  flex: 1;
  margin-left: 50px;

  @media only screen and (max-width: 650px){
    margin: 0px;
    margin: 30px 0px;
  }
`