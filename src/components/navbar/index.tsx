"use client";

import { Box, Flex, Link, SegmentedControl } from "@radix-ui/themes";
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useTheme } from "@/contexts/useTheme";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box
      px="6"
      py="8"
      className="flex items-center justify-between bg-black text-white"
    >
      <menu>
        <nav>
          <Flex gap="4" align="center" justify="end" className="hidden md:flex">
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
      </menu>
    </Box>
  );
};
