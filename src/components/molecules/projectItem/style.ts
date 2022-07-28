import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 25px 0px;
  cursor: pointer;

  border-color: ${({theme}) => theme.colors.primary};
  border-width: 0;
  border-bottom-width: ${({theme}) => theme.border.widths.thinner};
  border-style: solid;
`;