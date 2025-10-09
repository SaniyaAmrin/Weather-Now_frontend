import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="main-header">
      <div className="left-section">
        <span className="logo-icon">
          <svg width="34" height="34">
            <ellipse cx="17" cy="17" rx="17" ry="17" fill="#FFEB3B" />
            <ellipse cx="26" cy="28" rx="8" ry="6" fill="#FFF" />
            <ellipse cx="14" cy="26" rx="10" ry="7" fill="#FFF" />
          </svg>
        </span>
        <span className="project-title">WEATHER NOW</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;