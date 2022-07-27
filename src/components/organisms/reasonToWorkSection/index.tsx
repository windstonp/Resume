import { Title } from "../../atoms/Headings/title";
import { ReasonToWorkContent } from "../../molecules/reasonToWorkContent";
import { Container, Content } from "./style";

export function ReasonsToWorkSection(){
  return (
    <Container>
      <Title>
        Reasons to work with me
      </Title>
      <Content>
        <ReasonToWorkContent
          subtitleSection={<span>2+ years of web development <br/> & <br/> mobile development</span>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
        </ReasonToWorkContent>
        <ReasonToWorkContent
          subtitleSection={<span>Empathic <br/> & <br/> caring strategist</span>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
        </ReasonToWorkContent>
        <ReasonToWorkContent
          subtitleSection={<span>Curiosity<br/>&<br/>continuous improvement </span>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
        </ReasonToWorkContent>
      </Content>
    </Container>
  );
}