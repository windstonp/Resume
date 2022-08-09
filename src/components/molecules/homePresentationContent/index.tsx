import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { Button } from "../../atoms/Headings/button";
import { ButtonContainer, Container } from "./style";

export function HomePresentationContent() {
  return (
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
      <ButtonContainer>
        <Button as="a" href="/contact">
          Contact me!
        </Button>
      </ButtonContainer>
    </Container>
  )
}