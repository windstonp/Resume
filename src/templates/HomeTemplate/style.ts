import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;

  section{
    padding: 100px 100px;
    @media (max-width: 768px) {
      padding: 50px 25px;
    }
  }
`