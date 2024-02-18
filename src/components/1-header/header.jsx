import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "Dark" );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("Dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("Dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="menu icon-menu flex"
      ></button>

      <div>
        <h2  className="title name">
          PORT<span>FOLIO</span>
        </h2>
      </div>

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Projects</a>
          </li>
          
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //تخزين داخل Local storage
          localStorage.setItem(
            "currentMode",
            theme === "Dark" ? "light" : "Dark"
          );

          //استورد القيمة Local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {
          theme === "Dark" ?(
            <span className="icon-moon-o"> </span>
          ):(<span className="icon-sun"> </span>)
        }
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
