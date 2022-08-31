import React, { Fragment } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

type Props = {
  post: Post
};

const PostTile = ({ post }: Props) => {
  const title = post?.frontmatter?.title || post?.fields?.slug;
  const link = `/blog${post?.fields?.slug}`
  return (
    <Fragment>
      <div className="column">
        <article className="box has-text-centered">
          <Link to={link}>
            <h2 className="title hover:text-sky-800">{title}</h2>
          </Link>
          <p>
            {post?.frontmatter?.date} -{" "}
            <small className="inline">
              <FontAwesomeIcon icon={faClock} style={{ maxHeight: '10px' }} /> {post?.timeToRead} min
            </small>
          </p>
        </article>
      </div>
    </Fragment>
  );
};
export default PostTile;
