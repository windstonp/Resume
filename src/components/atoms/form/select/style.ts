import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  max-width: 50%;
`;

export const Select = styled.select`
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
    
    option{
      padding: 10px;
      color: ${theme.colors.tertiary };
      font-family: ${theme.fonts.family};
      font-weight: ${theme.fonts.weight.normal};
      font-size: ${theme.fonts.sizes.small};
      &:hover{
        background: ${theme.colors.secondary} ;
      }
      &:disabled{
        display: none;
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