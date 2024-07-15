import "./footer.css";
// import packageJson from '../../../package.json';

import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
      <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
          <ScrollLink to="contact" smooth={true} duration={500}>
              contact
            </ScrollLink>
          </li>
      </ul>

      <p>&copy; 2023 Ziad Mabrouki. All rights reserved.    </p>
    </footer>
  );
};

export default Footer;