import { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonLinkProps = HTMLAttributes<HTMLHeadingElement>

export function Text({color, children, ...rest}: ButtonLinkProps) {
  return(
    <Container
      data-testid="textComponent"
      color={color}
      {...rest}
    >
      {children}
    </Container>
  )
}