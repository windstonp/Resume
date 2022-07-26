import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  margin-right: 50px;

  margin-top: 30px;

  border-color: ${({theme}) => theme.colors.primary};
  border-width: 0;
  border-top-width: ${({theme}) => theme.border.widths.thinner};
  border-style: solid;

  padding: 25px;
  padding-left: 0px;

  &:first-child{
    padding-left: 0;
  }

  &:last-child{
    margin-right: 0px;
    border-bottom-width: ${({theme}) => theme.border.widths.thinner};

  }

  h3{
    margin-bottom: 30px;
  }
`;