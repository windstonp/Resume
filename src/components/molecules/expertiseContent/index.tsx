import React, { ReactNode } from "react";
import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Container } from "./style";

type ExpertiseContentProps ={
  children: ReactNode,
  subtitleSection: JSX.Element | string
};

export function ExpertiseContent({ children, subtitleSection }: ExpertiseContentProps){
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