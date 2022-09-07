import { Container, Content } from "./style";
import SenaiLogo from '../../../../../public/img/senai-sd.webp';
import DoutboxLogo from '../../../../../public/img/doutbox-logo.webp';
import { TextContent } from "./components/TextContent";
import { Image } from "./components/Image";
import { Heading2 } from "../../../../components/Headings";

export function WorkExperience(){
  return(
    <Container>
      <Heading2>
        Work Experience
      </Heading2>
      <Content>
        <TextContent
          company="Senai Soluções digitais"
        >
          Equipe de soluções digitais com foco em soluções direcionadas a empresas.
        </TextContent>
        <Image 
          src={SenaiLogo}
          alt="Senai Soluções digitais"
        />
      </Content>
      <Content>
        <TextContent
          company="Doutbox"
        >
          Equipe de soluções digitais com foco em soluções direcionadas a empresas.
        </TextContent>
        <Image
          src={DoutboxLogo}
          alt="Doutbox"
        />
      </Content>
    </Container>
  );
}