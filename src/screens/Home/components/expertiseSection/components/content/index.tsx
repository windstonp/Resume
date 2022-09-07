import { ReactNode } from "react";
import { Heading3 } from "../../../../../../components/Headings";
import { MutedText } from "../../../../../../components/MutedText";
import { Container } from "./style";


type ExpertiseContentProps = {
  children: ReactNode,
  subtitleSection: JSX.Element | string
};

export function ExpertiseContent({ children, subtitleSection }: ExpertiseContentProps) {
  return (
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