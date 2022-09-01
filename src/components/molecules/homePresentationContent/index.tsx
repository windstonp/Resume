import { Subtitle } from "../../atoms/Headings/subtitle";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { Button } from "../../atoms/Headings/button";
import { ButtonContainer, Container } from "./style";
import { theme } from "../../../global/styles/theme";

export function HomePresentationContent() {
  return (
    <Container>
      <Subtitle
        color={theme.colors.background[50]}
      >
        João Vitor Assunção Alves
      </Subtitle>
      <Title
        color={theme.colors.background[50]}
      >
        FullStack Website and Mobile Developer
      </Title>
      <Text
        color={theme.colors.background[100]}
      >
        Over the past 2 years, I have worked with large companies and startups, helping them to create their innovative websites with unique and innovative features.
      </Text>
      <ButtonContainer>
        <Button as="a" href="/contact">
          Contact me!
        </Button>
      </ButtonContainer>
    </Container>
  )
}