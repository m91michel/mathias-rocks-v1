import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";
import Link from "../components/general/Link";

const PageTemplate: React.FC = () => {
  const description = `My name is Mathias Michel, and I work as a Software Developer specializing in Web and Mobile development.`;
  const title = "About";

  return (
    <Layout title="About Mathias">
      <SEO title={title} description={description} />
      <div className="md:flex">
        <div className="md:flex-2 md:pr-5">
          <p>
            Hello and welcome! My name is Mathias Michel, and I work as a Software Developer specializing in Web and Mobile development. I
            graduated with a Bachelor of Computer Science &amp; Media from Technical University Nuremberg. I worked for{" "}
            <Link href="https://www.jambit.com">Jambit GmbH</Link> for three years before joining{" "}
            <Link href="https://www.klarx.de">Klarx</Link> in 2020. I am currently conducting the{" "}
            <Link to="/blog/2022-08-10-4-projects-in-4-months/">4 Projects in 4 Months</Link> challenge.
          </p>
          <p>
            Despite traveling the world and going to the gym, I am interested in finance, specifically stocks, peer-to-peer lending, and
            cryptocurrency. I value the simplicity of good design and user experience in products, that's why I enjoy creating user
            interfaces.
          </p>
          <p>
            Do you have any advices, questions, or simply want to contact me? Please contact me through the{" "}
            <Link to="/contact/">contact form</Link> or one of my social profiles.
          </p>
        </div>
        <div className="flex-1 md:flex-1 max-md:pt-5 md:pt-0">
          <StaticImage src="../images/mm-alpen.jpg" alt="Thats me in the mountains of Bavaria" width={300} height={400} layout="fixed" />
        </div>
      </div>
    </Layout>
  );
};

export default PageTemplate;
