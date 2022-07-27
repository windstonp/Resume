import styled from "styled-components"

export const Container = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  
`
export const Content = styled.div`
  display: flex;
`;

export const InnerContent = styled.div`

  margin-right: 50px;
  margin-bottom: 30px;
  &:last-child{
    margin-right: 0px;
  }
`;