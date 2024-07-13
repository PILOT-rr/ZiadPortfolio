import { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("Dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("Dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "Dark" ? "light" : "Dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  return (
    <header className="flex">
      <button
        onClick={() => setShowModal(true)}
        className="menu icon-menu flex"
      />

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
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Projects</a>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
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
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
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
