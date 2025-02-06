"use client";

import {
  Box,
  Card,
  Flex,
  Link,
  SegmentedControl,
  Theme,
} from "@radix-ui/themes";
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useTheme } from "@/contexts/useTheme";

import styles from "./style.module.css";
import { useState } from "react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box px="4" py="6">
      <menu>
        <nav className={styles.menuDesktop}>
          <Flex gap="4" align="center" justify="end">
            <NextLink href="/" legacyBehavior passHref>
              <Link>Home</Link>
            </NextLink>
            <NextLink href="/about" legacyBehavior passHref>
              <Link>About</Link>
            </NextLink>
            <NextLink href="/projects" legacyBehavior passHref>
              <Link>Projects</Link>
            </NextLink>
            <NextLink
              href="https://linkedin.com/in/windstonp"
              legacyBehavior
              passHref
            >
              <Link target="_blank">
                Linkedin
                <ExternalLinkIcon style={{ marginLeft: 10 }} />
              </Link>
            </NextLink>

            <NextLink
              href="https://github.com/windstonp"
              legacyBehavior
              passHref
            >
              <Link target="_blank">
                Github
                <ExternalLinkIcon style={{ marginLeft: 10 }} />
              </Link>
            </NextLink>

            <SegmentedControl.Root value={theme} defaultValue={theme}>
              <SegmentedControl.Item value="light" onClick={toggleTheme}>
                <div style={{ alignItems: "center", display: "flex" }}>
                  <SunIcon />
                </div>
              </SegmentedControl.Item>
              <SegmentedControl.Item value="dark" onClick={toggleTheme}>
                <div style={{ alignItems: "center", display: "flex" }}>
                  <MoonIcon />
                </div>
              </SegmentedControl.Item>
            </SegmentedControl.Root>
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
              <SegmentedControl.Root
                className={styles.switchTheme}
                value={theme}
                defaultValue={theme}
              >
                <SegmentedControl.Item value="light" onClick={toggleTheme}>
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <SunIcon />
                  </div>
                </SegmentedControl.Item>
                <SegmentedControl.Item value="dark" onClick={toggleTheme}>
                  <div style={{ alignItems: "center", display: "flex" }}>
                    <MoonIcon />
                  </div>
                </SegmentedControl.Item>
              </SegmentedControl.Root>
              <button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                <Cross1Icon width={24} height={24} />
              </button>

              <Flex gap="4" direction="column">
                <Box>
                  <NextLink href="/" legacyBehavior passHref>
                    <Link>Home</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink href="/about" legacyBehavior passHref>
                    <Link>About</Link>
                  </NextLink>
                </Box>

                <Box>
                  <NextLink href="/projects" legacyBehavior passHref>
                    <Link>Projects</Link>
                  </NextLink>
                </Box>
                <Box>
                  <NextLink
                    href="https://linkedin.com/in/windstonp"
                    legacyBehavior
                    passHref
                  >
                    <Link target="_blank">
                      Linkedin
                      <ExternalLinkIcon style={{ marginLeft: 10 }} />
                    </Link>
                  </NextLink>
                </Box>

                <Box>
                  <NextLink
                    href="https://github.com/windstonp"
                    legacyBehavior
                    passHref
                  >
                    <Link target="_blank">
                      Github
                      <ExternalLinkIcon style={{ marginLeft: 10 }} />
                    </Link>
                  </NextLink>
                </Box>
              </Flex>
            </Card>
          </nav>
        </Theme>
      </menu>
    </Box>
  );
};
