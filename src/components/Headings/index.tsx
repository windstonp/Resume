"use client";

import * as React from "react";
import { Heading, Text } from "@radix-ui/themes";
import { AccentColor } from "@/contexts/useTheme";

export interface TypographyPropsGeneric {
  children: React.ReactNode;
  color?: any;
  style?: React.CSSProperties;
  className?: string;
}

export type HeadingsProps = React.ComponentPropsWithoutRef<typeof Heading> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

interface TextsProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Text>, "as"> {
  as?: "div" | "p" | "span" | "label";
}

export const H1: React.FC<HeadingsProps> = ({
  children,
  as = "h1",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="7"
    weight="bold"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.2,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const H2: React.FC<HeadingsProps> = ({
  children,
  as = "h2",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="6"
    weight="bold"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.3,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const H3: React.FC<HeadingsProps> = ({
  children,
  as = "h3",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="5"
    weight="medium"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.35,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const H4: React.FC<HeadingsProps> = ({
  children,
  as = "h4",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="4"
    weight="medium"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.4,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const H5: React.FC<HeadingsProps> = ({
  children,
  as = "h5",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="4"
    weight="medium"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.45,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const H6: React.FC<HeadingsProps> = ({
  children,
  as = "h6",
  color,
  style,
  className,
}) => (
  <Heading
    as={as}
    size="4"
    weight="medium"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.5,
      ...style,
    }}
    className={className}
  >
    {children}
  </Heading>
);

export const P: React.FC<TextsProps> = ({
  children,
  as = "p",
  color,
  style,
  className,
}) => (
  <Text
    as={as}
    size="3"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.6,
      ...style,
    }}
    className={className}
  >
    {children}
  </Text>
);

export const Span: React.FC<TextsProps> = ({
  children,
  as = "span",
  color,
  style,
  className,
}) => (
  <Text
    as={as}
    size="2"
    color={color ?? AccentColor}
    style={{
      lineHeight: 1.6,
      ...style,
    }}
    className={className}
  >
    {children}
  </Text>
);
