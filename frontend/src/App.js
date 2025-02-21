// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MyId from "./screens/MyId";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/myid" element={<MyId />} />
        <Route path="*" element={<LandingScreen />} />
      </Routes>
    </div>
  );
}

export default App;

