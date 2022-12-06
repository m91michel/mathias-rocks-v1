import React from "react";
import { graphql, PageProps } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import PostTile from "../components/post-tile";

type PageContext = {
  tag: string;
};

const Blog = ({ data, pageContext: { tag } }: PageProps<Queries.PostsByTagsQuery, PageContext>) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node) as Post[];
  const title = `Posts for #${tag}`;

  return (
    <Layout title={title}>
      <SEO title={title} />
      <div className="py-4 max-w-2xl mx-auto">
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
  query PostsByTags($tag: String) {
    allMarkdownRemark(limit: 2000, sort: { frontmatter: { date: DESC } }, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
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
