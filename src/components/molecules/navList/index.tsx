import { ButtonLink } from "../../atoms/Links/buttonLink";
import { TextLink } from "../../atoms/Links/textLink";
import { Container, ContainerOption } from "./style";

export function NavList(){
  return (
    <Container data-testid="navListComponent">
      <ContainerOption>
        <TextLink href="/linkedin">
          Linkedin
        </TextLink>
      </ContainerOption>
      <ContainerOption>
        <TextLink href="/github">
          github
        </TextLink>
      </ContainerOption>
      <ContainerOption>
        <TextLink href="/Projects">
          Projects
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