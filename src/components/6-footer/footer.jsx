import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
      </ul>

      <p>&copy; 2023 Ziad Mabrouki. All rights reserved.  </p>
    </footer>
  );
};

export default Footer;