import { useState } from "react";
import "./main.css";
import { MyProject } from "./project";

const Main = () => {
  const [currentActive, SetCurrentActive] = useState("all");
  const [arr, SetArr] = useState(MyProject);

  const filterClick = (btnCategory) => {
    SetCurrentActive(btnCategory);
    const newArr = MyProject.filter((item) => {
      const noterNewArr = item.category.find((myItem) => {
        return myItem === btnCategory;
      });

      return noterNewArr === btnCategory;
    });
    SetArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            SetCurrentActive("all");
            SetArr(MyProject);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>
        <button 
          onClick={() => {
            filterClick("html-css");
          }}
          className={currentActive === "html-css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            filterClick("JavaScript");
          }}
          className={currentActive === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            filterClick("React-&-MUI");
          }}
          className={currentActive === "React-&-MUI" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            filterClick("Node-&-Express");
          }}
          className={currentActive === "Node-&-Express" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.imagPath} className="  card">
              <img width={240} src={item.imagPath} alt="" />

              <div style={{ width: "240px" }} className="box">
                <h1 className="title">{item.projectTitle} </h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
