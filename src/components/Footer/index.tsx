import { Heading4 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { getSeconds } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';
import { useEffect, useState } from 'react';
import { Socials } from '../Socials';
import { Container, Content, GroupElements } from './style';

export function Footer() {
  const [localTime, setLocalTime] = useState(
    formatInTimeZone(new Date(), 'America/Sao_Paulo', 'h:mm aa O'),
  );

  useEffect(() => {
    setInterval(() => {
      const seconds = getSeconds(new Date());
      if (seconds === 0) {
        setLocalTime(
          formatInTimeZone(new Date(), 'America/Sao_Paulo', 'h:mm aa O'),
        );
      }
    }, 1000);
  });

  return (
    <Container>
      <Content>
        <GroupElements>
          <Heading4>updated At</Heading4>
          <MutedText>2020</MutedText>
        </GroupElements>
        <GroupElements>
          <Heading4>Local Time</Heading4>
          <MutedText>{localTime}</MutedText>
        </GroupElements>
      </Content>
      <Content>
        <Socials />
      </Content>
    </Container>
  );
}
