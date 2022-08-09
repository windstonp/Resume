import { Button } from "../../atoms/Headings/button";
import { Subtitle } from "../../atoms/Headings/subtitle";
import { Container, ContainerOption } from "./style";

export function Menu() {
  return (
    <Container data-testid="navListComponent">
      <ContainerOption>
        <Subtitle as="a" target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
          Linkedin
        </Subtitle>
      </ContainerOption>
      <ContainerOption>
        <Subtitle as="a" target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL}>
          github
        </Subtitle>
      </ContainerOption>
      <ContainerOption>
        <Subtitle as="a" href="/About-Me">
          About Me
        </Subtitle>
      </ContainerOption>
      <ContainerOption>
        <Button as="a" href="/contact">
          Let's Talk
        </Button>
      </ContainerOption>
    </Container>
  )
}