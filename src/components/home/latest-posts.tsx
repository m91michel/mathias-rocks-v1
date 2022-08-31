import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PostTile from "../post-tile";

const titleStyle = {
  marginTop: "2em",
};

export default function LatestPosts() {
  const data = useStaticQuery<Queries.LatestPostQuery>(latestPostQuery);
  const posts = data.allMarkdownRemark.edges;
  
  return (
    <section className="container content">
      <div className="has-text-centered" style={titleStyle}>
        <h1 className="title">Latest posts</h1>
      </div>
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => (
          <PostTile key={node.fields?.slug} post={node} />
        ))}
      </div>
    </section>
  );
}

export const latestPostQuery = graphql`
  query LatestPost {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { collection: { eq: "blog" } } }) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
