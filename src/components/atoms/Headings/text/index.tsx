import { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonProps = HTMLAttributes<HTMLHeadingElement>

export function Text({ color, children, ...rest }: ButtonProps) {
  return (
    <Container
      data-testid="textComponent"
      color={color}
      {...rest}
    >
      {children}
    </Container>
  )
}