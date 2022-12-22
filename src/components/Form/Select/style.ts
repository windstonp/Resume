import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

export const Select = styled.select`
  ${({ theme }) => css`
    background-color: ${theme.colors.background[50]};
    border: 0;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: ${theme.colors.background[100]};
    color: ${theme.colors.tertiary};
    padding: 10px;
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    cursor: pointer;

    option {
      color: ${theme.colors.tertiary};
      font-family: ${theme.fonts.family};
      font-weight: ${theme.fonts.weight.normal};
      font-size: ${theme.fonts.sizes.small};
      padding: 10px;

      &:disabled {
        display: none;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.tertiary};
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    margin-bottom: 15px;
    padding: 0 10px;
  `}
`;
export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  font-family: ${({ theme }) => theme.fonts.family};
  padding: 10px 10px;
  height: 20px;
`;
