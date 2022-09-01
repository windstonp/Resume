import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: calc(100% + 100px);
  background: ${({theme}) => theme.colors.secondary};
`
