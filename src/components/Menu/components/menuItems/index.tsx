import Link from 'next/link';
import { Container, LinkText } from './style';

type MenuItemProps = {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function MenuItem({ href, children, onClick, ...rest }: MenuItemProps) {
  const variants = {
    menuOpen: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    menuClosed: {
      x: 200,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };
  return (
    <Container
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href} passHref>
        <LinkText onClick={onClick} {...rest}>
          {children}
        </LinkText>
      </Link>
    </Container>
  );
}
