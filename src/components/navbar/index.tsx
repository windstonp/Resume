"use client";
import { Box, Card, Flex, Theme } from "@radix-ui/themes";
import {
  ExternalLinkIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

import styles from "./style.module.css";
import { useState } from "react";
import { SwitchThemeComponent } from "../SwitchThemeComponent";
import { LinkComponent } from "../LinkComponent";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box px="4" py="6">
      <menu>
        <nav className={styles.menuDesktop}>
          <Flex gap="4" align="center" justify="end">
            <LinkComponent href="/">Home</LinkComponent>
            <LinkComponent href="/about">About</LinkComponent>
            <LinkComponent href="/projects">Projects</LinkComponent>

            <LinkComponent
              href="https://linkedin.com/in/windstonp"
              target="_blank"
            >
              Linkedin
              <ExternalLinkIcon style={{ marginLeft: 10 }} />
            </LinkComponent>

            <LinkComponent href="https://github.com/windstonp" target="_blank">
              Github
              <ExternalLinkIcon style={{ marginLeft: 10 }} />
            </LinkComponent>
            <SwitchThemeComponent />
          </Flex>
        </nav>
        <Theme radius="none" panelBackground="solid">
          <nav className={styles.menuMobile}>
            <button
              className={styles.hamburger}
              onClick={() => setIsOpen(true)}
            >
              <HamburgerMenuIcon width={24} height={24} />
            </button>

            <Card className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
              <SwitchThemeComponent className={styles.switchTheme} />
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <Cross1Icon width={24} height={24} />
              </button>

              <Flex gap="4" direction="column">
                <Box>
                  <LinkComponent href="/" onClick={() => setIsOpen(false)}>
                    Home
                  </LinkComponent>
                </Box>
                <Box>
                  <LinkComponent href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </LinkComponent>
                </Box>

                <Box>
                  <LinkComponent
                    href="/projects"
                    onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </LinkComponent>
                </Box>
                <Box>
                  <LinkComponent
                    href="https://linkedin.com/in/windstonp"
                    target="_blank"
                  >
                    Linkedin
                    <ExternalLinkIcon style={{ marginLeft: 10 }} />
                  </LinkComponent>
                </Box>

                <Box>
                  <LinkComponent
                    href="https://github.com/windstonp"
                    target="_blank"
                  >
                    Github
                    <ExternalLinkIcon style={{ marginLeft: 10 }} />
                  </LinkComponent>
                </Box>
              </Flex>
            </Card>
          </nav>
        </Theme>
      </menu>
    </Box>
  );
};
