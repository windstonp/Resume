
import { MutableRefObject } from "react";
import { Heading3 } from "components/Headings";
import { MutedText } from "components/MutedText";
import { Container } from "./style";

type ProjectItemProps = {
  title: string,
  role: string,
  container?: MutableRefObject<any>
};

export function Item({ title, role, container }:ProjectItemProps){
  return(
    <Container
      direction="up"
      container={container}
    >
      <Heading3>
        {title}
      </Heading3>
      <MutedText>
        {role}
      </MutedText>
    </Container>
  );
}