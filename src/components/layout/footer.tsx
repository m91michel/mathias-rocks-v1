import React from "react";
import Link from "../general/Link";

const Footer = () => (
  <footer className="flex justify-center">
    <div className="max-w-screen-sm p-5 text-center ">
      <div>
        Mathias Michel © {new Date().getFullYear()}, Built with
        {` `}
        <Link href="https://www.gatsbyjs.org">Gatsby</Link>
      </div>
      <div>
        <Link to="/imprint/">Imprint</Link>
      </div>
    </div>
  </footer>
);
export default Footer;
