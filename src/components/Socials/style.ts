import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({theme})=>css`
    display: flex;
    flex-direction: column;
    margin-right: 25px;

    &:last-child{
      margin-right: 0px;
    }

    h4{
      margin-bottom: 1rem;
    }

    div a {
      margin-right: 25px;
      text-decoration: none;
      &:last-child{
        margin-right: 0px;
      }
      &:hover{
        color: ${theme.colors.primary };
        transition: ${theme.transition.default};
      }
    }
  `}
`;