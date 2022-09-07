import { MenuItem } from "../menuItems";
import { Container } from "./style";

type MenuListProps = {
  toggle: () => void
}

export function MenuList({toggle}: MenuListProps){
  const variants = {
    menuOpen: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    menuClosed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  return(
    <Container
      variants={variants}
    >
      <MenuItem href="/"  onClick={toggle}>
        Home 
      </MenuItem>
      <MenuItem target="_blank" href={process.env.NEXT_PUBLIC_GITHUB_URL!}>
        Linkedin
      </MenuItem>
      <MenuItem target="_blank" href={process.env.NEXT_PUBLIC_LINKEDIN_URL!}>
        Github
      </MenuItem>
      <MenuItem href="/#aboutMe" onClick={toggle}>
        About Me
      </MenuItem>
      <MenuItem href="/contact" onClick={toggle}>
        let's talk
      </MenuItem>
    </Container>
  )
}