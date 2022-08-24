import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: Frontmatter;
    };
    site: any;
    avatar: any;
  };
  pageContext: {
    slug: string;
  };
}

const PageTemplate: React.FC<Props> = ({ data }) => {
  const page = data.markdownRemark;
  const { title, description, author } = data.site.siteMetadata;

  return (
    <div className="flex flex-col items-center p-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">
      <h1>{page?.frontmatter?.title}</h1>
      <p>{page?.frontmatter?.date || description}</p>
      <div className="flex items-center">
        <GatsbyImage
          image={data.avatar.childImageSharp.gatsbyImageData}
          alt={author}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <h1 className="text-lg">{title}</h1>
      </div>
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
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(width: 100, height: 100, layout: FIXED)
      }
    }
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
`;
