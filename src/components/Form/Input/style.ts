import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

export const Input = styled.input`
  ${({theme})=> css`
    padding: 10px;
    background-color: ${theme.colors.background[50]};
    border: 0;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: ${theme.colors.background[100]};
    color: ${theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};

    &:focus {
      border-color: ${theme.colors.secondary};
      color: ${theme.colors.secondary};
      & + label {
        color: ${theme.colors.secondary};
      }
    }
  `}
`;


export const Label  = styled.label`
  ${({theme})=> css`
    color: ${theme.colors.tertiary };
    font-family: ${theme.fonts.family};
    font-weight: ${theme.fonts.weight.normal};
    font-size: ${theme.fonts.sizes.small};
    margin-bottom: 15px;
    padding: 0 10px;
  `}
`
export const Error = styled.span`
  color: ${({theme}) => theme.colors.danger};
  font-size: ${({theme}) => theme.fonts.sizes.small};
  font-family: ${({theme}) => theme.fonts.family};
  padding: 10px 10px;
    height: 20px;
`;