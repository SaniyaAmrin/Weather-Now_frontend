import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="background-container">
      <div className="background-sun"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="signup-card">
        <h2 className="signup-title">Create your account</h2>
        <form>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Elon Musk"
            required
          />
          <label htmlFor="signup-email">Email</label>
          <input
            type="email"
            id="signup-email"
            placeholder="e.g. elon@tesla.com"
            required
          />
          <label htmlFor="signup-password">Password</label>
          <input
            type="password"
            id="signup-password"
            placeholder="Create a password"
            required
          />
          <button type="submit" className="signup-btn">Sign up</button>
        </form>
        <div className="signup-link-container">
          <Link to="/signin" className="back-to-signin">Back to Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;