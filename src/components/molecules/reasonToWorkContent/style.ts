import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  
  margin: 30px 0;

  border-color: ${({theme}) => theme.colors.primary};
  border-width: 0;
  border-right-width: ${({theme}) => theme.border.widths.thinner};
  border-style: solid;

  padding: 25px;

  &:first-child{
    padding-left: 0;
  }

  &:last-child{
    border-right-width: 0;
    padding-right: 0;
  }

  h3{
    margin-bottom: 50px;
  }
`;