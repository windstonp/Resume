import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  
`
export const Content = styled.div`
  display: flex;

  
  @media only screen and (max-width: 650px){
    flex-direction: column;
  }
`;

export const InnerContent = styled.div`

  margin-right: 50px;
  margin-bottom: 30px;
  &:last-child{
    margin-right: 0px;
  }

  @media only screen and (max-width: 650px){
    margin: 0px;

    & > div {
      &:last-child{
        border-bottom-width: 0;
      }
    }
  }
`;