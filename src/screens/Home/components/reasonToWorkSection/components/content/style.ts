import styled from 'styled-components';
import { Reveal } from 'components/Reveal';

export const Container = styled(Reveal)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex: 0.5;

  margin: 30px 0;

  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 0;
  border-right-width: ${({ theme }) => theme.border.widths.thinner};
  border-style: solid;

  padding: 30px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    border-right-width: 0;
    padding-right: 0;
  }

  h3 {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 650px) {
    border-right-width: 0;
    border-bottom-width: ${({ theme }) => theme.border.widths.thinner};
    padding: 0;
    padding-bottom: 30px;
    margin-bottom: 0;
  }
`;
