import { ReactNode } from 'react';
import { Heading3 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Container } from './style';

type ExpertiseContentProps = {
  children: ReactNode;
  subtitleSection: JSX.Element | string;
  direction: 'up' | 'down' | 'right' | 'left';
};

export function ExpertiseContent({
  children,
  subtitleSection,
  direction,
}: ExpertiseContentProps) {
  return (
    <Container direction={direction}>
      <Heading3>{subtitleSection}</Heading3>
      <MutedText>{children}</MutedText>
    </Container>
  );
}
