import styled from "styled-components";
export const Container = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px){
    display: none;
  }
`;
export const ContainerOption = styled.li`
  margin-left: 15px;
`;
