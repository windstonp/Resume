import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({theme}) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 25px 100px;
    background: ${ theme.colors.secondary};

    h3{
      color: ${theme.colors.background[100]}
    }

    @media (max-width: 768px) {
      padding: 25px 25px;
    }
  `}
`;