import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/navbar"; // Import Navbar
import Home from "./components/home";
import About from "./components/aboutme";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import ScrollToTop from "./components/scrollup";
import Footer from "./components/footer";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initializes AOS with settings
  }, []);
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
