import { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonProps = HTMLAttributes<HTMLHeadingElement>

export function Title({ color, children, ...rest }: ButtonProps) {
  return (
    <Container
      data-testid="titleComponent"
      color={color}
      {...rest}
    >
      {children}
    </Container>
  )
}