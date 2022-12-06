import React from "react";
import { graphql, PageProps } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import PostTile from "../components/post-tile";

const Blog = ({ data }: PageProps<Queries.BlogPostsQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node) as Post[];

  return (
    <Layout title="All Blog Posts" subtitle="Here's a list of all my blog posts">
      <SEO title="All Blog Posts" />
      <div className="py-4 max-w-2xl mx-auto border-t">
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }, filter: { fields: { collection: { eq: "blog" } } }) {
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
            tags
          }
        }
      }
    }
  }
`;
