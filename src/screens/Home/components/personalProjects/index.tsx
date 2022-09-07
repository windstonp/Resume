import { Heading2 } from "../../../../components/Headings";
import { Item } from "./components/item";
import { Container, Content } from "./style";

export function PersonalProjects(){
  return(
    <Container>
      <Heading2>
        Personal Projects
      </Heading2>
      <Content>
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
