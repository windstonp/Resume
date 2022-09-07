import { DividerMenuLine, MenuContainer, NavBar, NavCollumn } from "./style";
import { useCycle } from "framer-motion";
import { Socials } from "../Socials";
import { MenuList } from "./components/menuList";
import { MenuFloatToggle } from "./components/MenuFloatToggle";
import { MutedText } from "../MutedText";
import { Heading3 } from "../Headings";

export function Menu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    menuOpen: {
      x: "0",
      borderRadius: 0,
      transition: {
        type: "spring",
        ease: [0, 0.71, 0.2, 1.01],
        bounce: 0
      }
    },
    menuClosed: {
      x: "100%",
      borderRadius: "25% 0 0 25%",
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
        <MenuContainer 
          initial={false}
          variants={variants}
          style={{
            borderRadius: "25% 0 0 25%"
          }}
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
        <Heading3 onClick={()=>toggleOpen()}>
          menu
        </Heading3>
      </NavBar>
  )
}