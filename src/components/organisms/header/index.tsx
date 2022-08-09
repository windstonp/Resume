import { LogoText } from "../../molecules/logoText";
import { Menu } from "../../molecules/Menu";
import { MenuMobile } from "../../molecules/mobile/menu";
import { Container, Nav } from "./style";

export function Header() {
  return (
    <Container data-testid='header'>
      <Nav>
        <LogoText
          initialText="J"
          decoratedText="."
          finalText=" Alves"
        />
        <Menu />
        <MenuMobile />
      </Nav>
    </Container>
  )
}