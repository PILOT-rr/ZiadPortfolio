import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/1-header/header";
import Hero from "./components/2-hero/hero";
import Main from "./components/4-main/main";
import Contact from "./components/5-contact/contact";
import Footer from "./components/6-footer/footer";
import SkillsComponent from "./components/3-skills/SkillsComponent";
import Preloader from "./components/0-Preloader/Preloader";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Script to override console methods
  useEffect(() => {
    const blockInspectElement = () => {
      const noop = () => {};
      // Override console methods
      const methods = ["log", "debug", "info", "warn", "error", "assert", "clear", "dir", "dirxml", "group", "groupCollapsed", "groupEnd", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace", "count", "exception", "memory", "select"];

      methods.forEach(method => {
        console[method] = noop;
      });

      // Prevent inspect element on right-click
      document.addEventListener("contextmenu", event => event.preventDefault());
    };

    blockInspectElement();

    
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div id="up" className="container">
          <Header />
          <div className="divider" />
          <Hero />
          <div className="divider" />
          <SkillsComponent />
          <div className="divider" />
          <Main />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />

          {/* Scroll to Top Button */}
          <a href="#up" style={{ opacity: showScrollBTN ? 1 : 0, transition: "opacity 0.5s ease" }}>
            <button className="icon-keyboard_arrow_up scroll2Top"></button>
          </a>
        </div>
      )}
    </Router>
  );
}

export default App;
