import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>
      <p>Let's connect and build something awesome together!</p>

      <div className="contact-container">
        <div className="contact-details">
          <p>
            <FaEnvelope /> salmamonia20@gmail.com
          </p>
          <p>
            <FaPhone /> +62 813 6018 3526
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a href="https://github.com/niaa-1107" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/niania_1107?igsh=ODd3eThhMWh4aWU4"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
