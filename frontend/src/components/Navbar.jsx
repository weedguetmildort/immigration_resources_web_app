import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">Immigration Emergency Plan</div>
        <button className="hamburger-menu" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#section-one" onClick={() => setIsOpen(false)}>
                Immediate Actions
              </a>
            </li>
            <li>
              <a href="#section-two" onClick={() => setIsOpen(false)}>
                Resources & Support
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
