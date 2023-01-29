import React, { Fragment, ReactNode } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Tag from "../tag";
import { Script } from "gatsby";

type Props = {
  title?: string | null;
  subtitle?: string | null;
  children: ReactNode;
  tags?: string[] | null;
};

const Layout: React.FC<Props> = ({ title, subtitle, children, tags }) => {
  const header = (
    <header className="hero">
      <Navigation />

      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title" style={{ marginBottom: "0.5rem" }}>
            {title}
          </h1>
          <div>
            {subtitle && <span className="subtitle">{subtitle}</span>}
            {tags && (
              <div>
                {tags?.map((tag) => (
                  <Tag tag={tag} className="mx-1" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <Fragment>
      {header}
      <main className="min-h-2/4 max-w-screen-xl mx-auto my-0 px-4 lg:px-0">
        <section>
          <div className="container content">{children}</div>
        </section>
        <Script defer data-domain="mathias.rocks" src="/js/script.js" />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
