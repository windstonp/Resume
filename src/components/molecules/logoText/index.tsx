import Link from 'next/link';
import { TextDecorated, Container } from './style';

type LogoTextProps = {
  initialText: string,
  decoratedText: string,
  finalText: string,
}

export function LogoText({initialText, decoratedText, finalText}:LogoTextProps){
  return(
    <Link href='/' passHref>
      <Container data-testid='logoText'>
        {initialText}<TextDecorated>{decoratedText}</TextDecorated>{finalText}
      </Container>
    </Link>
  );
}