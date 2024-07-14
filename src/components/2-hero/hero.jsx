import React from "react";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import meImage from "./me.png";
import "./hero.css"; // Make sure to import your CSS file

const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          {/* Using the imported image */}
          <img src={meImage} className="avatar" alt="Ziad Mabrouki" />
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
          background and capabilities,{" "}
          <a
            href="./CV-Ziad-Mabrouki.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="Mycv">Click Here</button>
          </a>
        </p>

        <div className="all-icons flex">
          <a
            href="https://twitter.com/your_twitter_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-twitter"></div>
          </a>
          <a
            href="https://www.instagram.com/ziad_mabrouki?igsh=MXZvM2IwcnF1OW12eg%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/ziad-mabrouki-53395b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin"></div>
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          className="flex"
          style={{ maxWidth: "100%", height: "auto" }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
