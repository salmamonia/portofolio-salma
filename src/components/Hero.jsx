import React, { useEffect, useRef } from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { typeText } from "./Typing";

const About = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    if (typingRef.current) {
      typeText(typingRef.current, "NIA", 80);
    }
  }, []); // ⬅️ agar hanya jalan sekali saat mount

  return (
    <div className="about-container" style={{ marginTop: "320px" }}>
      <div className="about">
        <p className="ab1">ABOUT & CONTACT</p>

        <p className="ab3">
          HI, I'M <span className="col" ref={typingRef}></span>
        </p>

        <p className="ab2">UI/UX DESIGNER AND WEB DEVELOPER</p>

        <div className="sosmed">
          <a href="#instagram" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="#facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="#github" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="#twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
