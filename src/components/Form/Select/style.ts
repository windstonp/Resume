import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
`;

export const Select = styled(ReactSelect)`
  ${({theme})=> css`
    .react-select__control{
      background-color: ${({theme})=> theme.colors.background[50]};
      border: 0;
      border-width: 2px;
      border-radius: 0;
      border-style: solid;
      border-color: ${theme.colors.background[100]};
    }
    .react-select__value-container, .react-select__single-value {
      color: ${theme.colors.tertiary };
      font-family: ${theme.fonts.family};
      font-weight: ${theme.fonts.weight.normal};
      font-size: ${theme.fonts.sizes.small};
    }
    .react-select__menu{
      background-color: ${({theme})=> theme.colors.background[50]};

      border-width: 1px;
      border-color: ${({theme})=> theme.colors.background[100]};
      border-style: solid;
      
      .react-select__menu-list, .react-select__option {
        margin-right: 0;
      }
    }
    .react-select__option:active,
    .react-select__option--is-focused, 
    .react-select__option--is-focused:active,
    .react-select__option--is-selected,
    .react-select__option--is-selected:active {
      width: 100%;
      background-color: ${({theme}) => theme.colors.primary};
      color: ${({theme}) => theme.colors.background[50]};
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