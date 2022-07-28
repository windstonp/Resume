import { ReactNode } from "react";
import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Container } from "./style";

type ProjectItemProps = {
  title: string,
  role: string
};

export function ProjectItem({ title, role }:ProjectItemProps){
  return(
    <Container>
      <Subtitle>
        {title}
      </Subtitle>
      <Text>
        {role}
      </Text>
    </Container>
  );
}