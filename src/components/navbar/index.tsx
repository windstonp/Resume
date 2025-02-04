"use client";

import { Button, Box, Flex } from "@radix-ui/themes";
import { ExternalLinkIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useTheme } from "@/contexts/useTheme";
import { H6 } from "../Headings";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Box
      px="6"
      py="8"
      className="flex items-center justify-between bg-black text-white"
    >
      <Flex gap="4" align="center" justify="end" className="hidden md:flex">
        <Link href="/">
          <H6>Home</H6>
        </Link>
        <Link href="/about">
          <H6>About</H6>
        </Link>
        <Link href="/Projects">
          <H6>Projects</H6>
        </Link>
        <Link href="https://linkedin.com/in/windstonp" target="_blank">
          <H6>
            Linkedin
            <ExternalLinkIcon style={{ marginLeft: 10 }} />
          </H6>
        </Link>
        <Link href="https://github.com/windstonp" target="_blank">
          <H6>
            GitHub
            <ExternalLinkIcon style={{ marginLeft: 10 }} />
          </H6>
        </Link>

        <Button variant="soft" size="3" onClick={toggleTheme}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
};
