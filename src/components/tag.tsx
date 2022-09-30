import React from "react";
import { encodeUrl } from "../utils/helpers";
import Link from "./general/Link";

type Props = {
  tag: string;
  className?: string;
};

const Tag: React.FC<Props> = ({ tag, className }) => {
  return (
    <Link to={`/tags/${encodeUrl(tag)}/`}>
      <span className={`tag is-link ${className}`}>#{tag}</span>
    </Link>
  );
};
export default Tag;
