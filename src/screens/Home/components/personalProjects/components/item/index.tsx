import { MutableRefObject } from 'react';
import { Heading3 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import Link from 'next/link';
import { Container } from './style';

type ProjectItemProps = {
  title: string;
  responsibleFor: string;
  container?: MutableRefObject<null>;
  href: string;
};

export function Item({
  title,
  responsibleFor,
  container,
  href,
}: ProjectItemProps) {
  return (
    <Link href={href} passHref>
      <a target="_blank">
        <Container direction="up" container={container}>
          <Heading3>{title}</Heading3>
          <MutedText>{responsibleFor}</MutedText>
        </Container>
      </a>
    </Link>
  );
}
