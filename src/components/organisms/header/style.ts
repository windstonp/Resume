import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 100px;

  @media (max-width: 768px) {
    padding: 25px 25px;
  }
`;