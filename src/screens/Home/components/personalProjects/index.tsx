import { Heading2 } from "components/Headings";
import { Reveal } from "components/Reveal";
import { useRef } from "react";
import { Item } from "./components/item";
import { Container, Content } from "./style";

export function PersonalProjects(){
  const container = useRef(null)
  return(
    <Container>
      <Reveal>
        <Heading2>
          Personal Projects
        </Heading2>
      </Reveal>
      <Content
        ref={container}
      >
        <Item
          title="PlantManager"
          role="Developer"
        />
        <Item
          title="goFinance"
          role="Developer"
        />
        <Item
          title="ignews"
          role="Developer"
        />
        <Item
          title="Twick"
          role="Developer"
        />
      </Content>
    </Container>
  );
}
