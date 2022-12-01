import React, { ReactNode } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Link from "./general/Link";

type Props = {
  children: ReactNode;
};
const Container: React.FC<Props> = ({ children }) => <div className="flex max-w-screen-sm mx-auto my-0">{children}</div>;

function Bio() {
  const { site } = useStaticQuery(bioQuery);
  const { author, social } = site.siteMetadata;

  return (
    <Container>
      <article className="media">
        <figure className="media-left">
          <div className="image is-64x64">
            <StaticImage
              src="../images/profile-pic.jpg"
              alt={`Bio ${author}`}
              width={50}
              height={50}
              layout="fixed"
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </div>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              Written by {author} from Germany who loves building useful things.
              {` `}
              <Link href={`${social.twitter}`}>Follow me on Twitter</Link>
            </p>
          </div>
        </div>
      </article>
    </Container>
  );
}

const bioQuery = graphql`
  query BioQuery {
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
