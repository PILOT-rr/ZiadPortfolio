import  Lottie  from "lottie-react";
import devAnimation from "../../animation/dev.json";
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="../public/me.png" className="avatar" alt="" />
          <h2 className="title name">Ziad Mabrouki</h2>
          <div className="icon-verified"></div>
        </div>

        <p className="sub-title">
          My name <span>Ziad</span> Of Moroccan Nationality , I‘m Software
          Developer And Designer , For more <br/> Information  about me
          <a href="./CV-Ziad-Mabrouki.pdf" target="_blank">
        <button id="Mycv" style={{color:"#fff"}}>Click Here</button>
          </a>
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
        {" "}
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
