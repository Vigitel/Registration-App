// src/screens/LoginScreen.js
import React, { useState } from "react";
import axios from "axios";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [useremail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users/login", { useremail });
      setUserData(data);
      setMessage("Login successful!");
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Error logging in.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={submitHandler} className="login-form">
        <label>Email</label>
        <input
          type="email"
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      {message && <p className="login-message">{message}</p>}

      {userData && (
        <div className="user-info">
          <h3>User Info</h3>
          <p>Email: {userData.useremail}</p>
          <p>Full Name: {userData.fullname}</p>
          <p>Address: {userData.address}</p>
          <p>Contact: {userData.usercontact}</p>
          <p>Age: {userData.age}</p>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
