import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../layout/navigation";
import Link from "../general/Link";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaXing, FaLinkedinIn } from "react-icons/fa";

const socialButtons = [
  {
    id: "twitter",
    icon: <BsTwitter />,
  },
  {
    id: "github",
    icon: <BsGithub />,
  },
  {
    id: "xing",
    icon: <FaXing />,
  },
  {
    id: "linkedIn",
    icon: <FaLinkedinIn />,
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
              <div className="flex justify-center">
                {socialButtons.map((socialItem) => (
                  <Link key={socialItem.id} href={social[socialItem.id]} className="text-xl p-4 m-1 border rounded-full hover:bg-white !hover:text-[##3b8fce]">
                    {socialItem?.icon}
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
