import { ContainerNonFloatButtons, DividerMenuLine, MenuContainer, MenuDesktopContainer, MenuDesktopItem, NavBar, NavCollumn } from "./style";
import { useCycle } from "framer-motion";
import { Socials } from "../Socials";
import { MenuList } from "./components/menuList";
import { MenuFloatToggle } from "./components/MenuFloatToggle";
import { MutedText } from "../MutedText";
import { Heading3 } from "../Headings";
import { SizedContainer } from "components/Container";

export function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    menuOpen: {
      x: "0",
      transition: {
        type: "spring",
        ease: [0, 0.71, 0.2, 1.01],
        bounce: 0
      }
    },
    menuClosed: {
      x: "100%",
      transition: {
        type: "spring",
        when: "afterChildren",
        ease: "easeInOut",
        bounce: 0
      }
    }
  }
  return (
      <NavBar
        initial={false}
        animate={isOpen ? "menuOpen" : "menuClosed"}
      >
        <SizedContainer>
          <MenuContainer 
            initial={false}
            variants={variants}
          >
            <NavCollumn>
              <MutedText>
                Navigation
              </MutedText>
              <DividerMenuLine/>
              <MenuList toggle={() => toggleOpen()} />
            </NavCollumn>
            <Socials />
          </MenuContainer>
          <MenuFloatToggle isOpen={isOpen} toggle={() => toggleOpen()} />
          <ContainerNonFloatButtons>
            <Heading3 onClick={()=>toggleOpen()}>
              menu
            </Heading3>
            <MenuDesktopContainer>
              <MenuDesktopItem>
                <Heading3 as="a" href="/">
                  Home
                </Heading3>
              </MenuDesktopItem>
              <MenuDesktopItem>
                <Heading3 as="a" target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL!}>
                  Linkedin
                </Heading3>
              </MenuDesktopItem>
              <MenuDesktopItem>
                <Heading3 as="a" target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}>
                  Github
                </Heading3>
              </MenuDesktopItem>
              <MenuDesktopItem>
                <Heading3 as="a" href="/#aboutMe">
                  About Me
                </Heading3>
              </MenuDesktopItem>
              <MenuDesktopItem>
                <Heading3 as="a" href="/contact">
                  let's talk
                </Heading3>
              </MenuDesktopItem>
            </MenuDesktopContainer>
          </ContainerNonFloatButtons>
        </SizedContainer>
      </NavBar>
  )
}