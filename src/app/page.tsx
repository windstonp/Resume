import { H1, H2, P, Span } from "@/components/Headings";
import {
  Box,
  Button,
  Grid,
  Link,
  Section,
  Separator,
  Strong,
} from "@radix-ui/themes";
import NextLink from "next/link";

export default function Home() {
  return (
    <Box p="6">
      <Grid columns="1" gap="2">
        <header>
          <Box>
            <P>
              Hi, I'm <Strong>João Vitor Assunção Alves</Strong>, AKA{" "}
              <Strong>Alvezs</Strong>
            </P>
            <H1>I'm a Full-stack and Mobile developer</H1>
            <Span>
              I’m a passionate developer from Brazil, constantly exploring new
              technologies. Right now, I’m focused on building innovative web
              solutions.
            </Span>
          </Box>
        </header>
        <Section size="1">
          <Grid columns="1" gap="4">
            <P style={{ textAlign: "justify" }}>
              Hi, my name is João Alves. I'm a software developer based in
              Brazil, passionate about innovation and problem-solving.
            </P>
            <P style={{ textAlign: "justify" }}>
              I have experience working with frontend and backend technologies,
              having contributed to AI and chatbot projects at Alterdata
              Software, as well as developing high-performance solutions at
              SENAI Soluções Digitais.
            </P>
            <P style={{ textAlign: "justify" }}>
              My background includes React, React Native, Laravel, Node.js, Java
              Spring, among other technologies. I'm always looking to improve my
              skills and create meaningful digital experiences.
            </P>

            <NextLink href="/about" legacyBehavior>
              <Link>You can check more about me here!</Link>
            </NextLink>
          </Grid>
        </Section>
      </Grid>

      <Separator size="4" />

      <Section size="1">
        <Grid columns="1" gap="4">
          <H2>Need a Developer to give life to your ideas?</H2>
          <P>
            If you like my work or just want to reach out, feel free to drop me
            a message. I’ll do my best to respond promptly!
          </P>
          <Box>
            <NextLink href="/contact" legacyBehavior passHref>
              <Link underline="none">
                <Button size="3" variant="outline">
                  Let's work together!
                </Button>
              </Link>
            </NextLink>
          </Box>
        </Grid>
      </Section>
    </Box>
  );
}
