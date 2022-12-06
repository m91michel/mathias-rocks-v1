import React from "react";
import { Link } from "gatsby";
import { BiTimeFive } from "react-icons/bi";


type Props = {
  post: Post;
};

const PostTile = ({ post }: Props) => {
  const title = post?.frontmatter?.title || post?.fields?.slug;
  const link = `/blog${post?.fields?.slug}`;
  return (
    <article className="py-8 text-center border-0 border-b">
      <Link to={link}>
        <h2 className="title hover:text-sky-700">{title}</h2>
      </Link>
      <p className="text-sm text-gray-700 inline">
        {post?.frontmatter?.date} |{" "}
          <BiTimeFive className="inline mb-[3px]" /> {post?.timeToRead} min
      </p>
    </article>
  );
};
export default PostTile;
