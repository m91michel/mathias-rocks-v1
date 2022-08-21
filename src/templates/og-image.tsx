import React from "react";
import { graphql } from "gatsby";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: Frontmatter;
    };
  };
}

const PageTemplate: React.FC<Props> = ({ data }) => {
  const page = data.markdownRemark;

  return (
    <div>
      <h1>{page?.frontmatter?.title}</h1>
      <p>{page?.frontmatter?.date}</p>
      <p>Test Render</p>
    </div>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        date
      }
    }
  }
`;
