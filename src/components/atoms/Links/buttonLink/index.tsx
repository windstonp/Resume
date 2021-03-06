import Link from "next/link";
import { useState } from "react"
import { Container } from "./style"

export type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export function ButtonLink({ children, href = '#', ...rest }: ButtonLinkProps) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEvent = () => setIsActive((old) => !old);

  return (
    <Link href={`${href}`} passHref >
      <Container 
        isActive={isActive}
        onMouseOver={handleMouseEvent}
        onMouseLeave={handleMouseEvent}
        data-testid="buttonLinkComponent"
        {...rest}
      >
        {children}
      </Container>
    </Link>
  )
}