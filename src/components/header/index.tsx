import React from "react";
import { ButtonLink } from "../atoms/buttonLink";
import { TextLink } from "../atoms/textLink";
import { Container, Nav, LogoPoint, LogoText, NavList, NavListOption } from "./style";

export function Header(){
  return(
    <Container data-testid='header'>
      <Nav>
        <LogoText>
          J<LogoPoint>.</LogoPoint> Alves
        </LogoText>
        <NavList>
          <NavListOption>
            <TextLink href="/linkedin">
              Linkedin
            </TextLink>
          </NavListOption>
          <NavListOption>
            <TextLink href="/github">
              github
            </TextLink>
          </NavListOption>
          <NavListOption>
            <TextLink href="/Projects">
              Projects
            </TextLink>
          </NavListOption>
          <NavListOption>
            <TextLink href="/About-Me">
              About Me
            </TextLink>
          </NavListOption>
          <NavListOption>
            <ButtonLink href="/contact">
              Let's Talk
            </ButtonLink>
          </NavListOption>
        </NavList>
      </Nav>
    </Container>
  )
}