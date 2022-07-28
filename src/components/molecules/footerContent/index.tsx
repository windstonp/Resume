import Link from "next/link";
import { 
  Container, 
  Content, 
  FooterLink, 
  FooterSocialLinksContainer, 
  FooterText, 
  FooterTitle, 
  GroupElements 
} from "./style";
import { ptBR } from "date-fns/locale";
import { formatInTimeZone } from 'date-fns-tz'
import { useState } from "react";
import { getSeconds } from "date-fns";

export function FooterContent(){
  const [localTime, setLocalTime] = useState(
    formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
      locale: ptBR,
    })
  );

  setInterval(() => {
    let seconds = getSeconds(new Date());
    if(seconds === 0){
      setLocalTime(
        formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
          locale: ptBR,
        })
      )
    }
  }, 1000);

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
        <GroupElements>
          <FooterTitle>
            Social
          </FooterTitle>
          <FooterSocialLinksContainer>
            <Link href="/" passHref>
              <FooterLink>
                Linkedin
              </FooterLink>
            </Link>
            <Link href="/" passHref>
              <FooterLink>
                Github
              </FooterLink>
            </Link>
          </FooterSocialLinksContainer>
        </GroupElements>
      </Content>
    </Container>
  );
}