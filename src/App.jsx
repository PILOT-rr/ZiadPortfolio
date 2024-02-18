import React, { useState, useEffect } from 'react';
import Header from './components/1-header/header';
import Hero from './components/2-hero/hero';
import Main from './components/4-main/main';
import Contact from './components/5-contact/contact';
import Footer from './components/6-footer/footer';
import SkillsComponent from './components/3-skills/SkillsComponent';

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay with setTimeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 3 seconds

    // Cleanup function to clear the timeout
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

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id='up' className={`container ${loading ? 'loading' : ''}`}>
      {/* Loading Screen */}
      {loading && (
        <div className='loading-screen'>
          <div className='loading-spinner'></div>
      <img src="/public/hello.png" alt="hello" />
        </div>
      )}

      {/* Main Content */}
      {!loading && (
        <>
          <Header />
          <div className='divider' />
          <Hero />
          <div className='divider' />
          <SkillsComponent />
          <div className='divider' />
          <Main />
          <div className='divider' />
          <Contact />
          <div className='divider' />
          <Footer />

          {/* Scroll to Top Button */}
          <a href="#up" style={{ opacity: showScrollBTN ? 1 : 0, transition: "1.5s" }}>
            <button className='icon-keyboard_arrow_up scroll2Top'></button>
          </a>
        </>
      )}
    </div>
  );
}

export default App;
