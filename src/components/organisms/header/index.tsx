import { LogoText } from "../../molecules/logoText";
import { NavList } from "../../molecules/navList";
import { Container, Nav } from "./style";

export function Header(){
  return(
    <Container data-testid='header'>
      <Nav>
        <LogoText 
          initialText="J"
          decoratedText="."
          finalText=" Alves"
        />
        <NavList/>
      </Nav>
    </Container>
  )
}