import Image from "next/image";
import { Text } from "../../atoms/Headings/text";
import { Title } from "../../atoms/Headings/title";
import { ButtonLink } from "../../atoms/Links/buttonLink";
import { ButtonContainer, Container, Content, InnerContent } from "./style";

export function AboutMe(){
  return(
    <Container>
      <Content>
        <InnerContent>
          <Title>
            About Me
          </Title>
          <Text>
            I am João Vitor Assunção Alves. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque ex nec hendrerit fringilla.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor.   Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien. <br /> <br/> Sed dapibus, mauris vitae imperdiet feugiat, sapien tortor vehicula sem, Sed dapibus, mauris vitae imperdiet feugiat, sapien.
          </Text>
          <ButtonContainer>
            <ButtonLink
              href="/about-me"
            >
              Learn more about me
            </ButtonLink>
          </ButtonContainer>
        </InnerContent>
        <Image 
          src="/img/me.webp"
          width="600"
          height="600"
          alt="joao alves picture"
        />
      </Content>
    </Container>
  )
}