
import { Heading3 } from "../../../../../../components/Headings";
import { MutedText } from "../../../../../../components/MutedText";
import { Container } from "./style";

type ProjectItemProps = {
  title: string,
  role: string
};

export function Item({ title, role }:ProjectItemProps){
  return(
    <Container>
      <Heading3>
        {title}
      </Heading3>
      <MutedText>
        {role}
      </MutedText>
    </Container>
  );
}