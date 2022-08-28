import { Menu } from "../../molecules/Menu";
import { Container, Nav } from "./style";

export function Header() {
  return (
    <Container data-testid='header'>
      <Nav>
        <Menu />
      </Nav>
    </Container>
  )
}