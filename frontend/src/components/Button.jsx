import React from "react";
import "./Button.css"; // We'll create this next for button-specific styles

function Button({ children, onClick, className, ...props }) {
  return (
    <button
      className={`custom-button ${className || ""}`}
      onClick={onClick}
      {...props} // Pass any other standard button props like type="submit", disabled, etc.
    >
      {children}
    </button>
  );
}

export default Button;
