import { MenuToggle } from "../../molecules/menuToggle";
import { MenuContainer } from "./style";
import { motion, useCycle } from "framer-motion";
import { MenuList } from "../../molecules/menuList";

export function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const variants = {
    menuOpen: {
      y: "0",
      borderRadius: 0,
      transition: {
        ease: "easeInOut"
      }
    },
    menuClosed: {
      y: "100%",
      borderRadius: "100%",
      transition: {
        delay: 0.5,
        ease: "easeInOut"
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
        >
          <MenuList toggle={() => toggleOpen()} />
        </MenuContainer>
        <MenuToggle isOpen={isOpen} toggle={() => toggleOpen()} />
      </motion.nav>
  )
}