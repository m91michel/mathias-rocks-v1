import React from "react";
import { Link, graphql, PageProps } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

type PageContext = {
  previous: Queries.MarkdownRemark;
  next: Queries.MarkdownRemark;
};

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostBySlugQuery, PageContext>> = (props) => {
  const post = props.data.markdownRemark;
  const { previous, next } = props.pageContext;
  const subtitle = post?.frontmatter?.date;
  const keywords = post?.frontmatter?.keywords as string[];
  const tags = post?.frontmatter?.tags as string[];

  return (
    <Layout title={post?.frontmatter?.title} subtitle={subtitle} tags={tags}>
      <SEO title={post?.frontmatter?.title} description={post?.frontmatter?.description || post?.excerpt} keywords={keywords} />
      <div dangerouslySetInnerHTML={{ __html: post?.html || "" }} className="prose mx-auto prose-code:before:content-none prose-code:after:content-none prose-code:rounded" />
      <div className="py-10 mx-auto max-w-3xl">
        <ul className="flex flex-wrap list-none px-0 py-4 ml-0 justify-between" style={{ listStyle: `none` }}>
          <li className="flex-1 w-full">
            {previous && (
              <Link to={`/blog${previous.fields?.slug}`} rel="prev">
                ← {previous.frontmatter?.title}
              </Link>
            )}
          </li>
          <li className="flex-1 w-full mt-0 text-right">
            {next && (
              <Link to={`/blog${next.fields?.slug}`} rel="next">
                {next.frontmatter?.title} →
              </Link>
            )}
          </li>
        </ul>
        <hr style={{ height: "1px" }} className="my-4" />
        <Bio />
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        keywords
        tags
      }
    }
  }
`;
