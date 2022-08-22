/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
  keywords?: string[];
  ogImage?: OgImage;
}

const SEO: React.FC<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title,
  ogImage,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
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
  const imageUrl = ogImage?.path ? `${siteUrl}${ogImage?.path}` : `${siteUrl}/og-images/index.png`;

  return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: metaDescription,
          },
          {
            property: 'og:url',
            content: title,
          },
          {
            property: 'og:title',
            content: title,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:description',
            content: metaDescription,
          },
          {
            property: 'og:image',
            content: imageUrl,
          },
          {
            property: 'og:image:width',
            content: ogImage?.size?.width || '1200',
          },
          {
            property: 'og:image:height',
            content: ogImage?.size?.height || '630',
          },
          {
            name: 'twitter:card',
            content: `summary`,
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
            property: 'twitter:site',
            content: '@m91michel', // TODO: retrieve from config
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:creator',
            content: site.siteMetadata.author,
          },
          {
            name: 'twitter:description',
            content: metaDescription,
          },
          {
            name: 'twitter:image',
            content: imageUrl,
          },
        ]
          .concat(
            keywords.length > 0
              ? {
                  name: 'keywords',
                  content: keywords.join(', '),
                }
              : []
          )
          .concat(meta)}
      />
  );
};

export default SEO;
