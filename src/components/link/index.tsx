import { ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Link as RRLink, LinkProps as RRLinkProps } from "react-router-dom";
import React from "react";

export interface LinkProps extends RRLinkProps {
  children: ReactNode;
  variant?: VariantProps<typeof linkStyle>;
  className?: string;
}

const linkStyle = tv({
  base: "inline-block",
  variants: {
    type: {
      action: "text-white bg-accent font-bold rounded-[0.3rem] font-bold px-7 py-2.5 text-[1.2rem] hover:opacity-90",
    },
  },
});

export function Link({ variant, className, ...rest }: LinkProps) {
  return <RRLink {...rest} className={linkStyle({ ...variant, className })} />;
}
