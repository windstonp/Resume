import { Background, Button, Container, Path, Svg } from "./style";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

type ToggleProps = {
  toggle: () => void,
}

export const MenuToggle = ({ toggle }: ToggleProps) => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShow(latest > 100);
    })
  }, [])
  return (
    <Container>
      <Background 
        animate={show ? "show" : "hidden"}
        variants={{
          hidden: {
            scale: 0
          },
          show: {
            scale: 1
          }
        }}
        transition={{ duration: 0.1 }}
        style={{scale: 0}}
      />
      <Button onClick={toggle}>
        <Svg viewBox="0 0 20 22">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </Svg>
      </Button>
    </Container>
  )
};
