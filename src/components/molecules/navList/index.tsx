import { ButtonLink } from "../../atoms/Links/buttonLink";
import { TextLink } from "../../atoms/Links/textLink";
import { Container, ContainerOption } from "./style";

export function NavList() {
  return (
    <Container data-testid="navListComponent">
      <ContainerOption>
        <TextLink target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
          Linkedin
        </TextLink>
      </ContainerOption>
      <ContainerOption>
        <TextLink target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL}>
          github
        </TextLink>
      </ContainerOption>
      <ContainerOption>
        <TextLink href="/About-Me">
          About Me
        </TextLink>
      </ContainerOption>
      <ContainerOption>
        <ButtonLink href="/contact">
          Let's Talk
        </ButtonLink>
      </ContainerOption>
    </Container>
  )
}