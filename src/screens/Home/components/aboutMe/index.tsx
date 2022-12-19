import Image from "next/image";
import { Container, Content, ImageContainer, InnerContent } from "./style";

import Photo from '../../../../../public/img/me.webp';
import { MutedText } from "components/MutedText";
import { Heading2 } from "components/Headings";
import { Reveal } from "components/Reveal";

export function AboutMe() {
  return (
    <Container id="aboutMe">
      <Reveal>
        <Heading2>
          About Me
        </Heading2>
      </Reveal>
      <Content>
        <ImageContainer
          direction="right"
        >
          <Image
            src={Photo}
            alt="joao alves picture"
            placeholder="blur"
          />
        </ImageContainer>
        <InnerContent>
          <MutedText>
            Hello There, I'm João Vitor Assunção Alves. I'm a software developer based on Brazil, I've been working professionally
            since 2020 but I've started into the software develop world since 2018 when I've enrolled in a programming technical course
            which I've graduated in 2020.
            <br /><br />
            I love music and playing games, my favorite game is Life is Strange
          </MutedText>
        </InnerContent>
      </Content>
    </Container>
  )
}