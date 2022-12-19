import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
  `}
`;
export const SizedContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  width: 100%;
`