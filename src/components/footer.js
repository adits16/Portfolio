import React from "react";
const Footer = () => {
    const footerStyle = {
      width: "100%",
      maxWidth: "100vw",
      background: "#20B2AA",
      color: "#fff",
      textAlign: "center",
      padding: "1px 0",
      fontSize: "1rem",
    };
  
    const linkStyle = {
      color: "#fff",
      textDecoration: "none",
      margin: "0 5px",
    };
  
    return (
      <footer style={footerStyle}>
        <p>
          &copy; {new Date().getFullYear()} Aditi Gandhi |  
          aditi.gandhi1603@gmail.com |
          <a href="https://github.com/yourgithub/portfolio" 
             target="_blank" 
             rel="noopener noreferrer" 
             style={linkStyle}>
            Source Code
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
  