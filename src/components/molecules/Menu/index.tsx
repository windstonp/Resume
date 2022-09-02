import { theme } from "../../../global/styles/theme";
import { Button } from "../../atoms/Headings/button";
import { Subtitle } from "../../atoms/Headings/subtitle";
import S from "./style";

export function Menu() {
  return (
    <>
      <S.DesktopContainer data-testid="navListComponent">
        <S.ContainerOption>
          <Subtitle color={theme.colors.background[100]} as="a" href="/">
            Home
          </Subtitle>
        </S.ContainerOption>
        <S.ContainerOption>
          <Subtitle color={theme.colors.background[100]} as="a" target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
            Linkedin
          </Subtitle>
        </S.ContainerOption>
        <S.ContainerOption>
          <Subtitle color={theme.colors.background[100]} as="a" target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL}>
            github
          </Subtitle>
        </S.ContainerOption>
        <S.ContainerOption>
          <Subtitle color={theme.colors.background[100]} as="a" href="/About-Me">
            About Me
          </Subtitle>
        </S.ContainerOption>
        <S.ContainerOption>
          <Button as="a" href="/contact">
            Let's Talk
          </Button>
        </S.ContainerOption>
      </S.DesktopContainer>
      <S.MobileContainer>
        <Subtitle>
          menu
        </Subtitle>
      </S.MobileContainer>
    </>
  )
}