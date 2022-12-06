import React, { ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";

type Props = {
  href?: string;
  to?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<Props> = ({ href, to, children, ...others }) => {
  if (to) {
    return <GatsbyLink to={to} {...others}>{children}</GatsbyLink>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...others}>
      {children}
    </a>
  );
};

export default Link;
