import { MenuFloatToggle } from "../../molecules/MenuFloatToggle";
import { DividerMenuLine, MenuContainer, NavCollumn } from "./style";
import { motion, useCycle } from "framer-motion";
import { MenuList } from "../../molecules/menuList";
import { Text } from "../../atoms/Headings/text";

export function Header() {
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
      <motion.nav
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
            <Text>
              Navigation
            </Text>
            <DividerMenuLine/>
            <MenuList toggle={() => toggleOpen()} />
          </NavCollumn>
        </MenuContainer>
        <MenuFloatToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </motion.nav>
  )
}