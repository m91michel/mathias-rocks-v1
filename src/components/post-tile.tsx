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
    <article className="py-8 border-0 border-b">
      <p className="text-sm text-gray-700">
        {post?.frontmatter?.date} |{" "}
          <BiTimeFive className="inline mb-[4px]" /> {post?.timeToRead} min
      </p>
      <Link to={link}>
        <h2 className="title hover:text-sky-700">{title}</h2>
      </Link>
      <p>
        {post?.frontmatter?.description || post?.excerpt}
      </p>
    </article>
  );
};
export default PostTile;
