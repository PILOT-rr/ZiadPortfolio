import React from "react";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import meImage from "./me.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          {/* Using the imported image */}
          <img src={meImage} className="avatar" alt="" />
          <h2 className="title name">
            Ziad Mabrouki <span className="icon-verified"></span>
          </h2>
        </div>

        <p className="sub-title">
          My name is <span>Ziad</span>, and I am a Moroccan national. I
          specialize in software development and design, with a focus on
          creating innovative solutions. With extensive experience in the field,
          I bring a blend of technical expertise and creative insight to every
          project I undertake. If you would like to learn more about my
          background and capabilities
          <a
            href="./CV-Ziad-Mabrouki.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="Mycv" style={{ color: "#fff" }}>
              Click Here
            </button>
          </a>
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          className="flex"
          style={{ width: "300px" }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
