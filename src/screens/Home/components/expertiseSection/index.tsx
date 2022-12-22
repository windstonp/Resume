import { Reveal } from 'components/Reveal';
import { Heading2 } from 'components/Headings';
import { ExpertiseContent } from './components/content';
import { Container, Content, InnerContent } from './style';

export function ExpertiseSection() {
  return (
    <Container>
      <Reveal>
        <Heading2>My Expertise</Heading2>
      </Reveal>
      <Content>
        <InnerContent>
          <ExpertiseContent direction="left" subtitleSection="React">
            React is my favorite technology nowadays, the first time that I've
            put my hands on it was in the late's 2020 when I was assigned to a
            project that uses the MERN stack in it's core.
            <br />
            ever since them I try to get more and more knowledge with this
            technology which in my opinion is really incredible because of it's
            simplicity.
          </ExpertiseContent>
          <ExpertiseContent direction="right" subtitleSection="Node">
            I've been working with Node since 2020 when I've participated in a
            programming event called "semana omnistack" that have teach me the
            basics of it and show some cool things that I can develop with it.
            <br />
            Since then I've been looking to improve myself creating projects
            with it and getting more used with this technology
          </ExpertiseContent>
          <ExpertiseContent direction="left" subtitleSection="React Native">
            React Native is a pretty good technology which I love to work with,
            Since it make it easier to develop mobile applications without
            having the necessity to have 2 base codes for example kotlin and
            swift that are used for develop into specific mobile platforms.
          </ExpertiseContent>
          <ExpertiseContent direction="right" subtitleSection="Laravel">
            Laravel is a technology that lives in my heart, I've worked with it
            since the early 2020, but I've been in touch with php since 2018
            because my technical course used it as it base programming language.
            I really love working with PHP even now that I'm working as a mobile
            developer sometimes I still get some task to develop with Symfony.
          </ExpertiseContent>
        </InnerContent>
      </Content>
    </Container>
  );
}
