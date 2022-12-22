import { Reveal } from 'components/Reveal';
import styled from 'styled-components';

export const Container = styled(Reveal)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 0;
  margin-top: 1rem;
  border-color: ${({ theme }) => theme.colors.primary};
  border-top-width: ${({ theme }) => theme.border.widths.thinner};
  border-bottom-width: ${({ theme }) => theme.border.widths.thinner};
  border-style: solid;
  padding: 3rem 0;

  h3 {
    margin-bottom: 1rem;
  }
`;
