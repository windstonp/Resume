import { Heading2 } from 'components/Headings';
import { Reveal } from 'components/Reveal';
import { Container, Content } from './style';
import SenaiLogo from '../../../../../public/img/senai-sd.webp';
import DoutboxLogo from '../../../../../public/img/doutbox-logo.webp';
import { TextContent } from './components/TextContent';
import { Image } from './components/Image';

export function WorkExperience() {
  return (
    <Container>
      <Reveal>
        <Heading2>Work Experience</Heading2>
      </Reveal>
      <Content direction="right">
        <TextContent company="Senai Soluções digitais">
          Worked as a React Native developer to provide high quality apps.
        </TextContent>
        <Image src={SenaiLogo} alt="Senai Soluções digitais" />
      </Content>
      <Content direction="right">
        <TextContent company="Doutbox">
          Worked as a Full Stack Developer with focus on developing solutions
          for e-commerces.
        </TextContent>
        <Image src={DoutboxLogo} alt="Doutbox" />
      </Content>
    </Container>
  );
}
