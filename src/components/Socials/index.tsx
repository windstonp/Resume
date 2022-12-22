import { Heading4 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import Link from 'next/link';
import { Container } from './style';

export function Socials() {
  return (
    <Container>
      <Heading4>Social</Heading4>
      <div>
        <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL!} passHref>
          <MutedText as="a" target="_blank">
            Linkedin
          </MutedText>
        </Link>
        <Link href={process.env.NEXT_PUBLIC_GITHUB_URL!} passHref>
          <MutedText as="a" target="_blank">
            Github
          </MutedText>
        </Link>
      </div>
    </Container>
  );
}
