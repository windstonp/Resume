import { Heading2 } from 'components/Headings';
import { Reveal } from 'components/Reveal';
import { useRef } from 'react';
import Link from 'next/link';
import { Item } from './components/item';
import { Container, Content, MoreOnGithub } from './style';

export function PersonalProjects() {
  const container = useRef(null);
  return (
    <Container>
      <Reveal>
        <Heading2>Personal Projects</Heading2>
      </Reveal>
      <Content ref={container}>
        <Item
          title="PlantManager"
          responsibleFor="Developer"
          href="https://github.com/windstonp/PlantManager"
        />
        <Item
          title="goFinance"
          responsibleFor="Developer"
          href="https://github.com/windstonp/goFinance"
        />
        <Item
          title="ignews"
          responsibleFor="Developer"
          href="https://github.com/windstonp/ignews"
        />
        <Item
          title="Twick"
          responsibleFor="Developer"
          href="https://github.com/windstonp/Twick"
        />
      </Content>
      <MoreOnGithub direction="up">
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} passHref>
          <Heading2 as="a" target="_blank">
            More on my github profile.
          </Heading2>
        </Link>
      </MoreOnGithub>
    </Container>
  );
}
