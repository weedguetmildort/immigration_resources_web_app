import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = (page) => {
    onNavigate(page); // Call the navigate function passed from App.jsx
    setIsOpen(false); // Close the menu after clicking a link
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
            {/* Update links to use onClick and the onNavigate prop */}
            <li>
              <a onClick={() => handleNavLinkClick("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavLinkClick("about")}>About Us</a>
            </li>
            <li>
              <a onClick={() => handleNavLinkClick("faq")}>FAQ</a>
            </li>
            <li>
              <a onClick={() => handleNavLinkClick("privacy")}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a onClick={() => handleNavLinkClick("contact")}>Contact Us</a>
            </li>
            <li>
              <a onClick={() => handleNavLinkClick("giveback")}>Give Back</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
