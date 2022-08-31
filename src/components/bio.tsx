/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { ReactNode } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Link from "./general/Link";

type Props = {
  children: ReactNode;
};
const Container: React.FC<Props> = ({ children }) => <div className="flex max-w-screen-sm mx-auto my-0">{children}</div>;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author, social } = data.site.siteMetadata;
        return (
          <Container>
            <article className="media">
              <figure className="media-left">
                <div className="image is-64x64">
                  <GatsbyImage
                    image={data.avatar.childImageSharp.gatsbyImageData}
                    alt={author}
                    imgStyle={{
                      borderRadius: `50%`,
                    }}
                  />
                </div>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    Written by <strong>{author}</strong> who lives and works in Fürth, Bavaria building useful things.
                    {` `}
                    <Link href={`${social.twitter}`}>Follow me on Twitter</Link>
                  </p>
                </div>
              </div>
            </article>
          </Container>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 50, height: 50, layout: FIXED)
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
