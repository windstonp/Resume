import { Container, Content } from "./style";
import { Title } from "../../atoms/Headings/title";
import { WorkExperienceText } from "../../molecules/workExperience/WorkExperienceText";
import { WorkExperienceImage } from "../../molecules/workExperience/WorkExperienceImage";
import SenaiLogo from '../../../../public/img/senai-sd.webp';
import DoutboxLogo from '../../../../public/img/doutbox-logo.webp';

export function WorkExperience(){
  return(
    <Container>
      <Title>
        Work Experience
      </Title>
      <Content>
        <WorkExperienceText
          company="Senai Soluções digitais"
        >
          Equipe de soluções digitais com foco em soluções direcionadas a empresas.
        </WorkExperienceText>
        <WorkExperienceImage 
          src={SenaiLogo}
          alt="Senai Soluções digitais"
        />
      </Content>
      <Content>
        <WorkExperienceText
          company="Doutbox"
        >
          Equipe de soluções digitais com foco em soluções direcionadas a empresas.
        </WorkExperienceText>
        <WorkExperienceImage
          src={DoutboxLogo}
          alt="Doutbox"
        />
      </Content>
    </Container>
  );
}