// src/screens/LandingScreen.js
import React from "react";
import { Link } from "react-router-dom";
import "./LandingScreen.css";

const LandingScreen = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Vaccine Registration</h1>
      <p>Register yourself for a vaccine, or log in to view your info.</p>
      <div className="landing-links">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/myid">View My ID</Link>
      </div>
    </div>
  );
};

export default LandingScreen;
