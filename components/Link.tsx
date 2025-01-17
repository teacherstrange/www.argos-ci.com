import { forwardRef } from "react";
import { x } from "@xstyled/styled-components";
import NextLink from "next/link";

import type { As, Options, SystemComponent } from "./types";

export type LinkOptions<T extends As = "a"> = Options<T> & {
  href: string;
  children: React.ReactNode;
};

export const Link: SystemComponent<LinkOptions> = forwardRef(
  ({ children, href, ...props }, ref) => (
    <NextLink href={href} passHref>
      <x.a
        ref={ref}
        transition="default"
        textDecoration="none"
        color={{ _: "white", hover: "on-light" }}
        {...props}
      >
        {children}
      </x.a>
    </NextLink>
  )
);
