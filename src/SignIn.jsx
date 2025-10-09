import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="background-container">
      <div className="background-sun"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>
      <div className="signin-card">
        <h2 className="signin-title">Good to see you again</h2>
        <form>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            placeholder="e.g. elon@tesla.com"
            autoComplete="username"
            required
          />
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            placeholder="e.g. yourpassword123"
            autoComplete="current-password"
            required
          />
          <button type="submit" className="signin-btn">Sign in</button>
        </form>
        <div className="signin-links">
          <Link to="/signup">Don't have an account?</Link>
          <a href="#forgot" className="forgot-link">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;