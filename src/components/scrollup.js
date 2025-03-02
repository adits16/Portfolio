import { useState, useEffect } from "react";
import upArrow from "../assets/icons/up-arrow.png";
import "./scrollup.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="imgcont">
    <img
      src={upArrow} 
      alt="Scroll to Top"
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    /></div>
  );
};

export default ScrollToTop;
