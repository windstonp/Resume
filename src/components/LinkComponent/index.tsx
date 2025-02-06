import { Link } from "@radix-ui/themes";
import NextLink from "next/link";
import { ReactNode } from "react";

type LinkComponentProps = {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export function LinkComponent({
  children,
  href,
  onClick,
  target = "_self",
}: Readonly<LinkComponentProps>) {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link target={target} onClick={onClick}>
        {children}
      </Link>
    </NextLink>
  );
}
