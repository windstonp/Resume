import React, { HTMLAttributes } from "react";
import { Container } from "./style";

export type ButtonLinkProps = HTMLAttributes<HTMLHeadingElement>

export function Subtitle({color, children, ...rest}: ButtonLinkProps) {
  return(
    <Container
      data-testid="subtitleComponent"
      color={color}
      {...rest}
    >
      {children}
    </Container>
  )
}