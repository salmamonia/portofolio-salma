import React from "react";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <a href="#home" className="logo">
            niaa
          </a>
        </div>

        <nav className="header-nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
