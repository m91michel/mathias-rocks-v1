import React, { ReactNode } from "react";
import { Link as GatsbyLink } from "gatsby";

interface Props {
  href?: string;
  to?: string;
  children: ReactNode;
}

const Link: React.FC<Props> = ({ href, to, children }) => {
  if (to) {
    return <GatsbyLink to={to}>{children}</GatsbyLink>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Link;
