import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const NotFoundPage: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query PageNotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
