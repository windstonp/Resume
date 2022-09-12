import { Heading4 } from "components/Headings";
import { MutedText } from "components/MutedText";
import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { Socials } from "../Socials";
import {
  Container,
  Content,
  GroupElements
} from "./style";

export function Footer(){
  const localTime = formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
    locale: ptBR,
  });
  return(
    <Container>
      <Content>
        <GroupElements>
          <Heading4>
            updated At
          </Heading4>
          <MutedText>
            2020
          </MutedText>
        </GroupElements>
        <GroupElements>
          <Heading4>
            Local Time
          </Heading4>
          <MutedText>
            {localTime}
          </MutedText>
        </GroupElements>
      </Content>
      <Content>
        <Socials />
      </Content>
    </Container>
  );
}