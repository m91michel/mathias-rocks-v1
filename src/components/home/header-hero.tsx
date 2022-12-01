import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faXing, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navigation from "../layout/navigation";
import Link from "../general/Link";

const socialButtons = [
  {
    id: "twitter",
    icon: faTwitter,
  },
  {
    id: "github",
    icon: faGithub,
  },
  {
    id: "xing",
    icon: faXing,
  },
  {
    id: "linkedIn",
    icon: faLinkedin,
  },
];

const HeaderHero = () => {
  const { site } = useStaticQuery(headerHeroQuery);
  const { author, social, bio } = site.siteMetadata;

  return (
    <header className="hero is-info is-medium is-bold">
      <Navigation />

      <div className="hero-body">
        <div className="container">
          <div className="media-content">
            <div className="content has-text-centered">
              <StaticImage
                src="../../images/profile-pic.jpg"
                alt={author}
                className="mx-auto"
                width={170}
                height={170}
                layout="fixed"
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <h1 className="title is-uppercase is-spaced is-2">{author}</h1>
              <h2 className="subtitle">{bio}</h2>
              <div className="subtitle">
                {socialButtons.map((socialItem) => (
                  <Link key={socialItem.id} href={social[socialItem.id]}>
                    <span className="icon social-button hover:text-sky-800">
                      <FontAwesomeIcon icon={socialItem.icon} size="1x" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const headerHeroQuery = graphql`
  query HeaderHeroQuery {
    site {
      siteMetadata {
        author
        bio
        social {
          twitter
          github
          xing
          linkedIn
        }
      }
    }
  }
`;
export default HeaderHero;
