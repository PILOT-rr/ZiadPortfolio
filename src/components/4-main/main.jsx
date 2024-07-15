import React, { useState } from "react";
import "./main.css"; // Import your CSS file for styling
import { MyProject } from "./project";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [projects, setProjects] = useState(MyProject);

  const filterProjects = (category) => {
    setCurrentActive(category);
    const filteredProjects = MyProject.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProjects);
  };

  return (
    <main className="flex">
      <section id="projects" className="flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setProjects(MyProject);
          }}
          className={currentActive === "all" ? "active" : ""}
        >
          All Projects
        </button>
        <button
          onClick={() => filterProjects("html-css")}
          className={currentActive === "html-css" ? "active" : ""}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => filterProjects("JavaScript")}
          className={currentActive === "JavaScript" ? "active" : ""}
        >
          JavaScript
        </button>
        <button
          onClick={() => filterProjects("React & MUI")}
          className={currentActive === "React & MUI" ? "active" : ""}
        >
          React & MUI
        </button>
        <button
          onClick={() => filterProjects("Node & Express")}
          className={currentActive === "Node & Express" ? "active" : ""}
        >
          Node & Express
        </button>
      </section>

      <section className="flex right-section">
        {projects.map((project) => (
          <article key={project.imagePath} className="card">
            <img width={240} src={project.imagePath} alt="" />
            <div style={{ width: "240px" }} className="box">
              <h1 className="title">{project.projectTitle}</h1>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id mollis nunc. Nulla facilisi. Donec tincidunt lorem
                nec nibh euismod, vel elementum odio malesuada.
              </p>
              <div className="flex icons">
                <div className="flex">
                  <div className="icon-link"></div>
                  <div className="icon-github"></div>
                </div>
                <a className="link flex" href="">
                  More
                  <span className="icon-arrow-right"></span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
