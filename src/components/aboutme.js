import React from "react";
import "./aboutme.css";
import cat from "../assets/icons/codecat.png";

const About = () => {
    return (
      <section id="about" className="about-section" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
  <div className="about-graphic">
    <img src={cat} alt="cat" className="cat" />
  </div>
  <div className="about-content">
    
    <p><span>I build things for the web.</span><br></br>
      I'm a software engineer exploring the world of developing (and occasionally designing) digital experiences.
      <br />
      My favorite work lies at the intersection of design and development!
    </p>
  </div>
</section>

    );
  };
  
  export default About;
  