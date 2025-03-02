import React from "react";
import "./home.css";
import profile from "../assets/Aditi.jpg";
import { ReactTyped } from "react-typed";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import twitterIcon from "../assets/icons/twitter.png";
import behanceIcon from "../assets/icons/behance.png";

const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
    return(
        <section id="home" className="home" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
        <div className="home-content">
          <div className="intro">
            <h1>hi,<br /> I am <span>Aditi Gandhi</span></h1>
            <ReactTyped
          className="typing-text"
          strings={[
            "Front-End Developer",
            "UI/UX Enthusiast"
          ]}
          typeSpeed={80} // Typing speed
          backSpeed={50} // Deleting speed
          loop // Keeps repeating
        />

<div className="social-icons">
            <a href="https://github.com/adits16" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/aditi-gandhi-1603" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/aditseag" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://www.behance.net/aditigandhi" target="_blank" rel="noopener noreferrer">
              <img src={behanceIcon} alt="Behance" />
            </a>
          </div>
         <button className="connect-btn"  onClick={() => scrollToSection("contact")}>Let's Connect</button>
        </div>
      
      <div className="image-content">
          <img src={profile} alt="Aditi" className="home-image" />
        </div>
      
      </div>
        </section>
    );
}

export default Home;