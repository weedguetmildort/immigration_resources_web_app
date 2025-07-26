import React from "react";
import "./Footer.css"; // We'll create this next for specific footer styles

function Footer() {
  return (
    <footer className="app-footer">
      <p>
        &copy; {new Date().getFullYear()} Your Organization Name. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
