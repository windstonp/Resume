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
import { useEffect, useState } from "react";
import { getSeconds } from "date-fns";

export function FooterContent() {
  const localTime = formatInTimeZone(new Date, 'America/Sao_Paulo', 'h:mm aa O', {
    locale: ptBR,
  });
  return (
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
            <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} passHref>
              <FooterLink target="_blank">
                Linkedin
              </FooterLink>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} passHref>
              <FooterLink target="_blank">
                Github
              </FooterLink>
            </Link>
          </FooterSocialLinksContainer>
        </GroupElements>
      </Content>
    </Container>
  );
}