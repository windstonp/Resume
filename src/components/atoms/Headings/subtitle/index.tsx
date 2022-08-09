import Link from "next/link";
import { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonProps = {
  as?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
  & HTMLAttributes<HTMLHeadingElement>

export function Subtitle({ as = "h3", href = "#", children, ...rest }: ButtonProps) {
  return (
    <>
      {as === "a" ?
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
          data-testid="subtitleComponent"
          {...rest}
        >
          {children}
        </Container>
      }

    </>
  )
}