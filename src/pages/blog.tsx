import React from "react";
import { graphql, PageProps } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import PostTile from "../components/post-tile";


const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node);

  return (
    <Layout title="Latest Posts">
      <SEO title="Blog" />
      <div style={{ margin: "20px 0 40px" }}>
        {posts.map((post: Post) => (
          <PostTile key={post.fields?.slug} post={post} />
        ))}
      </div>
      <Bio />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: { fields: { collection: { eq: "blog" } } }) {
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
