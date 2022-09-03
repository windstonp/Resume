import { useRef, useState } from "react";
import { MenuToggle } from "../../molecules/menuToggle";
import { Container } from "./style";
import { motion, useCycle } from "framer-motion";

export function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
  )
}