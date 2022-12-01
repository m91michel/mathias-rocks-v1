import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: Frontmatter;
    };
  };
  pageContext: {
    slug: string;
  };
}

const PageTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const page = data.markdownRemark;

  return (
    <Layout title={page.frontmatter.title}>
      <SEO
        title={page.frontmatter.title}
        description={page.frontmatter.description || ""}
        slug={pageContext.slug}
      />
      <div dangerouslySetInnerHTML={{ __html: page.html }} className="prose mx-auto" />
    </Layout>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
