import Image from 'next/image';
import { MutedText } from 'components/MutedText';
import { Heading2 } from 'components/Headings';
import { Reveal } from 'components/Reveal';
import Photo from '../../../../../public/img/me.webp';
import {
  Container,
  Content,
  ImageContainer,
  InnerContent,
  LongTextContainer,
} from './style';

export function AboutMe() {
  return (
    <Container id="aboutMe">
      <Reveal>
        <Heading2>About Me</Heading2>
      </Reveal>
      <Content>
        <ImageContainer direction="right">
          <Image src={Photo} alt="joao alves picture" placeholder="blur" />
        </ImageContainer>
        <InnerContent>
          <MutedText>
            Hello There, I'm João Vitor Assunção Alves. I'm a software developer
            based in Brazil, I've been working professionally since 2020 but
            I've started into the software develop world since 2018 when I've
            enrolled in a programming technical course which I've graduated in
            2020.
            <br />
            <br />
            I'm currently working as a mobile developer at Senai Soluções
            digitais, but sometimes I also get some tasks for web development.
            Usually I'm responsible for develop and maintain features which
            generate value on the project, easing the life of the user and
            improving the quality of the project.
            <br />
            <br />
            Besides programming I love playing videogames and going out with
            friends, I like to play my electric guitar but I also have a
            keyboard but I've not spend too much time with it yet to play it
            properly, and reading some books on my free time.
          </MutedText>
        </InnerContent>
      </Content>
      <LongTextContainer direction="up">
        <MutedText>
          I've been studying english as a self taught since 2018, and I plan in
          the future learn more languages but it's not something that I gonna be
          on total focus probably gonna take it as a hobby since I really like
          the journey that learning a new language is.
        </MutedText>
      </LongTextContainer>
    </Container>
  );
}
