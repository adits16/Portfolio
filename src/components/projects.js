import React from "react";
import "./projects.css";
import arbin from "../assets/projects/arbin.jpg";
import sa from "../assets/projects/sentiment_analysis.gif";


const Projects = () => {
    return (
      <section id="projects" className="projects-section" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
        <h1 style={{ fontSize: "2.7rem", fontWeight: "bold" }}>Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            
            <h3>Indoor Navigation using AR</h3>
            <div className="imgcontainer"><img src={arbin} alt="Project 1" className="project-image1" /></div>
            <p>The indoor navigation system uses Augmented Reality to navigate within buildings with multiple floors.</p>
            <a href="https://github.com/adits16/Augmented-reality-based-Indoor-navigation-using-Unity" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
  
          <div className="project-card">
            
            <h3>Sentiment analysis</h3>
            <div className="imgcontainer"><img src={sa} alt="Project 2" className="project-image" /></div>
            <p>Performs sentiment analysis on textual reviews using deep learning techniques and Tensorflow.</p>
            <a href="https://github.com/adits16/Sentiment-Analysis-using-Tensorflow" target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  