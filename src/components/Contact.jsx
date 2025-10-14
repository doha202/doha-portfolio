import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p>
                <a href="mailto:dohaelhaiba33@gmail.com">dohaelhaiba33@gmail.com</a>
            </p>
          </div>
          <div>
            <h3>CV</h3>
            <p>
              <a href="/CV_Doha_ElHaiba.pdf.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
