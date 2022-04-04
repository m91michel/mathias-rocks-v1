import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faXing,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "../layout/navigation";

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

class HeaderHero extends React.Component {
  render() {
    return (
      <StaticQuery
        query={headerHeroQuery}
        render={(data) => {
          const { author, social, bio } = data.site.siteMetadata;
          return (
            <header className="hero is-info is-medium is-bold">
              <Navigation />

              <div className="hero-body">
                <div className="container">
                  <div className="media-content">
                    <div className="content has-text-centered">
                      <GatsbyImage
                        image={data.avatar.childImageSharp.gatsbyImageData}
                        alt={author}
                        imgStyle={{
                          borderRadius: `50%`,
                        }} />
                      <h1 className="title is-uppercase is-spaced is-2">
                        {author}
                      </h1>
                      <h2 className="subtitle">{bio}</h2>
                      <div className="subtitle">
                        {socialButtons.map((socialItem) => (
                          <a
                            key={socialItem.id}
                            href={social[socialItem.id]}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="icon social-button">
                              <FontAwesomeIcon
                                icon={socialItem.icon}
                                size="1x"
                              />
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          );
        }}
      />
    );
  }
}

const headerHeroQuery = graphql`query HeaderHeroQuery {
  avatar: file(absolutePath: {regex: "/profile-pic.jpg/"}) {
    childImageSharp {
      gatsbyImageData(width: 170, height: 170, layout: FIXED)
    }
  }
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
