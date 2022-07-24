import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  width: 100%;
  height: calc(100vh - 100px);

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`

export const RightContainer = styled.div`
  max-width: 600px;
  z-index: 1;
  h1, h3, p, a{
    margin: 20px 0px;
  }
  p{
    max-width: 80%;
  }
`
export const Image = styled.img`
  width: auto;
  height: 100%;
  position: absolute;
  right: 0;
`;