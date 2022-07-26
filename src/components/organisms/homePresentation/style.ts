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