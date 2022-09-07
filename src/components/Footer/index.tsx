import { formatInTimeZone } from "date-fns-tz";
import { ptBR } from "date-fns/locale";
import { Socials } from "../Socials";
import {
  Container,
  Content,
  FooterText,
  FooterTitle,
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
          <FooterTitle>
            updated At
          </FooterTitle>
          <FooterText>
            2020
          </FooterText>
        </GroupElements>
        <GroupElements>
          <FooterTitle>
            Local Time
          </FooterTitle>
          <FooterText>
            {localTime}
          </FooterText>
        </GroupElements>
      </Content>
      <Content>
        <Socials />
      </Content>
    </Container>
  );
}