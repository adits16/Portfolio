import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");
        const [statusMessage, setStatusMessage] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (!name || !email || !message) {
            setStatusMessage("Please fill in all fields.");
            return;
          }
      
          const serviceId = "service_yonzmhy";
          const templateId = "template_euv4wvq";
          const publicKey = "mYvyu5MgZe4F-c45B";
      
          const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Aditi Gandhi",
            message: message,
          };
      
          emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
              console.log("Email sent successfully!", response);
              setStatusMessage("✅ Message sent successfully!"); // ✅ Set success message
        setName('');
        setEmail('');
        setMessage('');

        setTimeout(() => {
          setStatusMessage('');
        }, 3000);
            })
            .catch((error) => {
              console.error("Error sending email:", error);
              setStatusMessage("❌ Failed to send message. Try again!");
            });
        };
    return(
        <section id="contact" className="contactme" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="200">
            <div className="contact-container">
                <div className="text1">
                    <div className="paragraph">
                        <h1 style={{ fontSize: "2.7rem", fontWeight: "medium" }}>I'm not that hard <br />to  <span style={{color:"#20B2AA"}}> find</span>;)</h1>
                        <p style={{fontSize: "1.5rem" , fontWeight:"500"}}>Let's connect</p>
                    </div>
                    <div>
                        <button className="resume-btn"><a href="https://drive.google.com/file/d/1-1zNT2rd-Li4k82cGdet3seyBiUGSZWJ/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>Download resume</a></button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className='contact-form'>
            <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send message</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}  
        </form>

            </div>
        </section>
    );
}

export default Contact;
