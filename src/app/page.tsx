import { Navbar } from "@/components/navbar";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Box p="6">
        <Flex direction="column" align="center" gap="3">
          <Avatar size="6" src="https://via.placeholder.com/100" fallback="A" />
          <Heading size="8">João da Silva</Heading>
          <Text size="4" color="gray">
            Desenvolvedor Fullstack | React | Next.js | Node.js
          </Text>
        </Flex>

        <Separator size="4" my="4" />

        <Box>
          <Heading size="6">Experiência</Heading>
          <Text size="4">
            <strong>Empresa XYZ</strong> - Desenvolvedor Frontend (2021 -
            Presente)
          </Text>
          <Text color="gray">
            Atuando com React, Next.js e integração com APIs.
          </Text>
        </Box>

        <Separator size="4" my="4" />

        <Box>
          <Heading size="6">Educação</Heading>
          <Text size="4">
            <strong>Universidade ABC</strong> - Bacharelado em Ciência da
            Computação (2017 - 2021)
          </Text>
        </Box>

        <Separator size="4" my="4" />

        <Box>
          <Heading size="6">Contato</Heading>
          <Text>Email: joao@email.com</Text>
          <Text>LinkedIn: linkedin.com/in/joaosilva</Text>
          <Text>GitHub: github.com/joaosilva</Text>
        </Box>
      </Box>
    </Container>
  );
}
