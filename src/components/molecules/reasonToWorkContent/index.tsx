import { ReactNode } from 'react';
import { Subtitle } from '../../atoms/Headings/subtitle';
import { Text } from '../../atoms/Headings/text';
import { Container } from './style';

type ReasonToWorkProps = {
  subtitleSection: string|JSX.Element,
  children: ReactNode
}

export function ReasonToWorkContent({ subtitleSection, children }: ReasonToWorkProps){
  return(
    <Container>
      <Subtitle>
        {subtitleSection}
      </Subtitle>

      <Text>
        {children}
      </Text>
    </Container>
  );
}