import { Heading2 } from "../../../../components/Headings";
import { ReasonContent } from "./components/content";
import { Container, Content } from "./style";

export function ReasonsToWorkSection(){
  return (
    <>
      <Container>
        <Heading2>
          Reasons to work with me
        </Heading2>
        <Content>
          <ReasonContent
            subtitleSection={<span>2+ years of web development <br/> & <br/> mobile development</span>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
          </ReasonContent>
          <ReasonContent
            subtitleSection={<span>Empathic <br/> & <br/> caring strategist</span>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
          </ReasonContent>
          <ReasonContent
            subtitleSection={<span>Curiosity<br/>&<br/>continuous improvement </span>}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna libero, pellentesque nec tellus sed, bibendum pharetra ipsum. In posuere vestibulum ligula, sed blandit velit euismod porttitor. Integer viverra in ipsum sed suscipit. Morbi ids.
          </ReasonContent>
        </Content>
      </Container>
    </>
  );
}