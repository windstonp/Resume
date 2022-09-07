import { Container, Path, Svg } from "./style";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

type ToggleProps = {
  toggle: () => void,
  isOpen: boolean
}

export const MenuFloatToggle = ({ toggle, isOpen }: ToggleProps) => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    scrollY.onChange((latest) => {
      setShow(latest > 100);
    })
  }, []);
  return (
    <Container
      initial={false}
      animate={(show || isOpen) ? "showMenuBackground" : "hiddenMenuBackground"}
      variants={{
        hiddenMenuBackground: {
          scale: 0,
          transition: {
            ease: "easeInOut"
          }
        },
        showMenuBackground: {
          scale: 1
        }
      }}
      transition={{ duration: 0.1 }}
      onClick={toggle}
    >
      <Svg width='24' height='24' viewBox='0 0 24 24'>
        <Path
          stroke='#FFFFFF'
          animate={isOpen ? "menuOpen" : "menuClosed"}
          variants={{
            menuOpen: { d: 'M3.06061 2.99999L21.0606 21' },
            menuClosed: { d: 'M0 9.5L24 9.5' },
          }}
        />
        <Path
          animate={isOpen ? "menuOpen" : "menuClosed"}
          variants={{
            menuOpen: { d: 'M3.00006 21.0607L21 3.06064' },
            menuClosed: { d: 'M0 16.5L24 16.5' },
          }}
        />
      </Svg>
    </Container>
  )
};
