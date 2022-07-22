import Link from "next/link";
import { Container } from "./style";

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function TextLink({color, href, children, ...rest}: ButtonLinkProps) {
  return(
    <Link href={`${href}`} passHref>
      <Container
        color={color}
        {...rest}
      >
        {children}
      </Container>
    </Link>
  )
}