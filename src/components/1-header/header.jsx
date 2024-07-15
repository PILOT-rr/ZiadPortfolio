import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./header.css"; // Make sure to import your CSS file
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") || "light");

  useEffect(() => {
    document.body.classList.toggle("Dark", theme === "Dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "Dark" ? "light" : "Dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <header className="flex">
      <button onClick={handleModalOpen} className="menu icon-menu flex" />

      <div>
        <h2 className="title name">
          PORT<span>FOLIO</span>
        </h2>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      <button onClick={toggleTheme} className="mode flex">
        {theme === "Dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed" onClick={handleModalClose}>
          <ul className="modal" onClick={(e) => e.stopPropagation()}>
            <li>
              <button className="icon-close" onClick={handleModalClose} />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
