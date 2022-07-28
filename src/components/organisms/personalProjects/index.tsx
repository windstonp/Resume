import { Title } from "../../atoms/Headings/title";
import { ProjectItem } from "../../molecules/projectItem";
import { Container, Content } from "./style";

export function PersonalProjects(){
  return(
    <Container>
      <Title>
        Personal Projects
      </Title>
      <Content>
        <ProjectItem 
          title="PlantManager"
          role="Developer"
        />
        <ProjectItem
          title="PlantManager"
          role="Developer"
        />
        <ProjectItem
          title="PlantManager"
          role="Developer"
        />
      </Content>
    </Container>
  );
}