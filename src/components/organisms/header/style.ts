import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
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