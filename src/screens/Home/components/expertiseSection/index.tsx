import { Heading2 } from "../../../../components/Headings";
import { ExpertiseContent } from "./components/content";
import { Container, Content, InnerContent } from "./style";

export function ExpertiseSection(){
  return(
    <Container>
      <Heading2>
        My Expertise
      </Heading2>
      <Content >
        <InnerContent>
          <ExpertiseContent
            subtitleSection="React"
          >
            lorem ipsu Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc, efficitur ullamcorper lorem sagittis eget.
            <br/>
            Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc.m
          </ExpertiseContent>
          <ExpertiseContent
            subtitleSection="Node"
          >
            lorem ipsu Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc, efficitur ullamcorper lorem sagittis eget.
            <br />
            Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc.m
          </ExpertiseContent>
        </InnerContent>
        <InnerContent>
          <ExpertiseContent
            subtitleSection="React Native"
          >
            lorem ipsu Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc, efficitur ullamcorper lorem sagittis eget.
            <br />
            Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc.m
          </ExpertiseContent>
          <ExpertiseContent
            subtitleSection="Laravel"
          >
            lorem ipsu Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc, efficitur ullamcorper lorem sagittis eget.
            <br />
            Integer maximus tellus at scelerisque sagittis. Aliquam tincidunt ullamcorper nisi, ac sollicitudin est viverra id. Phasellus ultricies turpis nunc.m
          </ExpertiseContent>
        </InnerContent>
      </Content>
    </Container>
  );
}