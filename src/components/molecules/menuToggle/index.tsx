import { Background, Button, Container, Path, Svg } from "./style";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

type ToggleProps = {
  toggle: () => void,
  isOpen: boolean
}

export const MenuToggle = ({ toggle, isOpen }: ToggleProps) => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    scrollY.onChange((latest) => {
      setShow(latest > 100);
    })
  }, []);
  return (
    <Container>
      <Background 
        initial={false}
        animate={(show || isOpen) ? "showMenuBackground" : "hiddenMenuBackground"}
        variants={{
          hiddenMenuBackground: {
            scale: 0,
            transition: {
              delay: 0.6,
              ease: "easeInOut"
            }
          },
          showMenuBackground: {
            scale: 1
          }
        }}
        transition={{ duration: 0.1 }}
      />
      <Button onClick={toggle}>
        <Svg viewBox="0 0 20 22">
          <Path
            variants={{
              menuClosed: { d: "M 2 2.5 L 20 2.5" },
              menuOpen: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              menuClosed: { opacity: 1 },
              menuOpen: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              menuClosed: { d: "M 2 16.346 L 20 16.346" },
              menuOpen: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </Svg>
      </Button>
    </Container>
  )
};
