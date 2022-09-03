import Image from "next/image";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { Container, Content, ImageContainer, InnerContent } from "./style";

import Photo from '../../../../public/img/me.webp';

export function AboutMe() {
  return (
    <Container>
      <Title>
        About Me
      </Title>
      <Content>
        <InnerContent>
          <Text>
            I am João Vitor Assunção Alves. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ex nec hendrerit fringilla.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien. <br /> <br /> Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien.
          </Text>
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