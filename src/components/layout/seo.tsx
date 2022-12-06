import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { openGraph } from "../../utils/og-image";

interface Props {
  description?: string | null;
  lang?: string;
  meta?: any[];
  title?: string | null;
  keywords?: string[] | null;
  slug?: string;
}

const SEO: React.FC<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title
}) => {
  const { site } = useStaticQuery(
    graphql`
      query SeoQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            domain
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;
  const domain = site.siteMetadata.domain;
  const seoTitle = title || site.siteMetadata.title;
  const seoKeywords = keywords || [];
  const imageUrl = openGraph({
    siteName: siteUrl,
    templateTitle: seoTitle,
    theme: "dark",
    ogType: "personal",
  });

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoTitle}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          name: "author",
          content: site.siteMetadata.author,
        },
        {
          property: "og:url",
          content: title,
        },
        {
          property: "og:title",
          content: seoTitle,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          name: "image",
          property: "og:image",
          content: imageUrl,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          name: "twitter:card",
          content: `summary_large_image`,
        },
        {
          property: `twitter:domain`,
          content: domain,
        },
        // {
        //   property: `twitter:url`,
        //   content: siteUrl, // TODO: replace with page url
        // },
        {
          property: "twitter:site",
          content: "@m91michel", // TODO: retrieve from config
        },
        {
          name: "twitter:title",
          content: seoTitle,
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        },
      ]
        .concat(
          seoKeywords.length > 0
            ? {
                name: "keywords",
                content: seoKeywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
