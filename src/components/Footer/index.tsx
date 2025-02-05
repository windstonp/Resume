import { Box, Flex, Grid, Link, Section, Separator } from "@radix-ui/themes";
import { H4, P, Span } from "../Headings";
import NextLink from "next/link";
import { ArrowUpIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
export function Footer() {
  const date = new Date().getFullYear();
  return (
    <Box px="6">
      <Separator size="4" />

      <footer>
        <Flex justify="between" align="stretch">
          <Grid columns="1" p="3">
            <P>© {date} João Vitor Assunção Alves</P>
            <menu>
              <Section size="1">
                <Flex justify="start" gap="3">
                  <NextLink href="/" legacyBehavior passHref>
                    <Link>
                      <Span>Home</Span>
                    </Link>
                  </NextLink>
                  <NextLink href="/about" legacyBehavior passHref>
                    <Link>
                      <Span>About</Span>
                    </Link>
                  </NextLink>
                  <NextLink href="/projects" legacyBehavior passHref>
                    <Link>
                      <Span>Projects</Span>
                    </Link>
                  </NextLink>
                  <NextLink
                    href="https://github.com/windstonp"
                    legacyBehavior
                    passHref
                  >
                    <Link target="_blank">
                      <Span>Github</Span>
                      <ExternalLinkIcon style={{ marginLeft: 5 }} />
                    </Link>
                  </NextLink>
                  <NextLink
                    href="https://linkedin.com/in/windstonp"
                    legacyBehavior
                    passHref
                  >
                    <Link target="_blank">
                      <Span>Linkedin</Span>
                      <ExternalLinkIcon style={{ marginLeft: 5 }} />
                    </Link>
                  </NextLink>
                </Flex>
              </Section>
            </menu>
          </Grid>
          <Grid columns="1" p="3">
            <NextLink href="/#" passHref legacyBehavior>
              <Link underline="none">
                <H4>
                  Go back to top <ArrowUpIcon scale="4" />
                </H4>
              </Link>
            </NextLink>
          </Grid>
        </Flex>
      </footer>
    </Box>
  );
}
