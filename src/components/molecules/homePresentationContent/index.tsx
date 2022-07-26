import React from "react";
import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { ButtonLink } from "../../atoms/Links/buttonLink";
import { Container } from "./style";

export function HomePresentationContent(){
  return(
    <Container>
      <Subtitle>
        João Vitor Assunção Alves
      </Subtitle>
      <Title>
        FullStack Website and Mobile Developer
      </Title>
      <Text>
        Over the past 4 years, I have worked with large companies and startups, helping them to create their innovative websites with unique and innovative features.
      </Text>
      <ButtonLink>
        Contact me!
      </ButtonLink>
    </Container>
  )
}