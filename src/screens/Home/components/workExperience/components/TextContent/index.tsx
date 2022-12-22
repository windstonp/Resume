import { ReactNode } from 'react';
import { Heading3 } from 'components/Headings';
import { MutedText } from 'components/MutedText';

import { Container } from './style';

type WorkExperienceTextProps = {
  company: string;
  children: ReactNode;
};

export function TextContent({ company, children }: WorkExperienceTextProps) {
  return (
    <Container>
      <Heading3>{company}</Heading3>
      <MutedText>{children}</MutedText>
    </Container>
  );
}
