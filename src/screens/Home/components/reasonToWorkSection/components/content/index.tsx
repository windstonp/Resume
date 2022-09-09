import { ReactNode } from 'react';
import { Heading3 } from 'components/Headings';
import { MutedText } from 'components/MutedText';

import { Container } from './style';

type ReasonToWorkProps = {
  subtitleSection: string|JSX.Element,
  children: ReactNode
}

export function ReasonContent({ subtitleSection, children }: ReasonToWorkProps){
  return(
    <Container>
      <Heading3>
        {subtitleSection}
      </Heading3>

      <MutedText>
        {children}
      </MutedText>
    </Container>
  );
}