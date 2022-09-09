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
        <InnerContent>
          <MutedText>
            I am João Vitor Assunção Alves. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ex nec hendrerit fringilla.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien. <br /> <br /> Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien.
          </MutedText>
        </InnerContent>
        <ImageContainer
          direction="right"
        >
          <Image
            src={Photo}
            alt="joao alves picture"
            placeholder="blur"
          />
        </ImageContainer>
      </Content>
    </Container>
  )
}