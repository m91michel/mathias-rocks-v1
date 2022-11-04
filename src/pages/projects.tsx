import React from "react";
import Link from "../components/general/Link";
import Layout from "../components/layout/layout";
import SEO from "../components/layout/seo";

const projects = [
  {
    title: "EinfachCrypto.de",
    link: "https://EinfachCrypto.de",
    description:
      "This is a German website about cryptocurrencies. I have built some tools here to help me get some insight about the current state of the crypto market. This project started as an Instagram account.",
    tags: ["React", "Typescript", "Gatsby", "GraphQL", "Supabase", "Tailwind", "n8n"],
  },
  {
    title: "Alexander Wunsch",
    link: "https://alexander-wunsch.de/",
    description:
      "Alexander is a nutrition and dietary coach who helps people lose weight. I advise him with technical solutions for his business and built his website. I also created his logo and the design of his website.",
    tags: ["WordPress", "Divi Theme", "Figma"],
  },
  {
    title: "Restaurant-Penelope",
    link: "https://restaurant-penelope.de/",
    description:
      "Penelope is a Greek restaurant in Fürth that wanted a nice looking website. I created the concept, chose a theme, and implemented the website using WordPress.",
    tags: ["WordPress"],
  },
  {
    title: "Großkopf Elektrotechnik GmbH",
    link: "https://grosskopf-elektrotechnik-gmbh.de/",
    description: "This company provides electrical services and needed a website. I helped with setting up WordPress and provided technical support.",
    tags: ["WordPress", "Hestia Thema", "Elementor"],
  },
  {
    title: "Personal Wiki",
    link: "https://m91michel.github.io/knowledge/",
    description: "A personal wiki for myself, where I collect interesting information.",
  },
];

const Projects: React.FC = () => {
  const siteTitle = "Side Projects";

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <div className="columns is-multiline">
        {projects.map((project) => (
          <div className="column is-half" key={project.link}>
            <Link href={project.link}>
              <div className="notification is-info">
                <h2 className="has-text-white">{project.title}</h2>
                <p>{project.description}</p>
                {project.tags && (
                  <div>
                    <p className="font-bold">Tech Stack:</p>
                    <div className="tags">
                      {project.tags?.map((tag) => (
                        <span className="tag is-link is-light">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
export default Projects;
