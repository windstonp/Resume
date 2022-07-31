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
          title="goFinance"
          role="Developer"
        />
        <ProjectItem
          title="ignews"
          role="Developer"
        />
        <ProjectItem
          title="Twick"
          role="Developer"
        />
      </Content>
    </Container>
  );
}
