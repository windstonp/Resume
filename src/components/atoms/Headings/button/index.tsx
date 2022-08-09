import Link from "next/link";
import { Container } from "./style"

export type ButtonProps = {
  as?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ as = 'button', children, href = '#', ...rest }: ButtonProps) {

  return (
    <>
      {as === 'a' ?
        <Link href={`${href}`} passHref >
          <Container
            as={as}
            data-testid="ButtonComponent"
            {...rest}
          >
            {children}
          </Container>
        </Link>
        :
        <Container
          data-testid="ButtonComponent"
          {...rest}
        >
          {children}
        </Container>
      }
    </>
  )
}