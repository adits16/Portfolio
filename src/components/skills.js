import React from "react";
import "./skills.css";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/js.png";
import react from "../assets/skills/react.png";
import java from "../assets/skills/java.png";
import sql from "../assets/skills/sql.png";
import mongo from "../assets/skills/mongo.png";
import python from "../assets/skills/python.png";
import git from "../assets/skills/git.png";
import figma from "../assets/skills/figma.png";


const Skills = () => {
    return (
      <section id="skills" className="skills-section" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
        <h1 style={{ fontSize: "2.7rem", fontWeight: "bold" }}>Skills</h1>
        <div className="skills-container">
          <figure className="skill-card">
            <img src={html} alt="HTML" className="skill-icon" />
            <figcaption>HTML5</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={css} alt="CSS" className="skill-icon" style={{ width: "70px" }} />
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={js} alt="JavaScript" className="skill-icon" />
            <figcaption>JavaScript</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={react} alt="React" className="skill-icon" style={{ width: "90px" }}/>
            <figcaption>React</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={java} alt="Java" className="skill-icon" />
            <figcaption>Java</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={python} alt="Python" className="skill-icon" />
            <figcaption>Python</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={sql} alt="MySQL" className="skill-icon" />
            <figcaption>MySQL</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={mongo} alt="MongoDB" className="skill-icon" />
            <figcaption>MongoDB</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={git} alt="Git" className="skill-icon" />
            <figcaption>Git</figcaption>
          </figure>
          <figure className="skill-card">
            <img src={figma} alt="Figma" className="skill-icon" style={{ width: "60px" }} />
            <figcaption>Figma</figcaption>
          </figure>
        </div>
      </section>
    );
  };
  
  export default Skills;
  
