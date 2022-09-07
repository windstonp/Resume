import Image from "next/image";
import { Container, Content, ImageContainer, InnerContent } from "./style";

import Photo from '../../../../../public/img/me.webp';
import { MutedText } from "../../../../components/MutedText";
import { Heading2 } from "../../../../components/Headings";

export function AboutMe() {
  return (
    <Container id="aboutMe">
      <Heading2>
        About Me
      </Heading2>
      <Content>
        <InnerContent>
          <MutedText>
            I am João Vitor Assunção Alves. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ex nec hendrerit fringilla.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien. <br /> <br /> Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien.
          </MutedText>
        </InnerContent>
        <ImageContainer>
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