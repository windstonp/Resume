import React, { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonLinkProps = HTMLAttributes<HTMLHeadingElement>

export function Title({color, children, ...rest}: ButtonLinkProps) {
  return(
    <Container
      data-testid="titleComponent"
      color={color}
      {...rest}
    >
      {children}
    </Container>
  )
}