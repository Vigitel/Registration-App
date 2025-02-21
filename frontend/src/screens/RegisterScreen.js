// src/screens/RegisterScreen.js
import React, { useState } from "react";
import axios from "axios";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [useremail, setUserEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [usercontact, setUserContact] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/users", {
        useremail,
        fullname,
        address,
        age,
        usercontact,
      });
      setMessage(`Registration successful! Hello, ${data.fullname}`);
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Error registering user.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register for Vaccine</h2>
      <form onSubmit={submitHandler} className="register-form">
        <label>Email</label>
        <input
          type="email"
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />

        <label>Full Name</label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <label>Contact</label>
        <input
          type="text"
          value={usercontact}
          onChange={(e) => setUserContact(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
      {message && <p className="register-message">{message}</p>}
    </div>
  );
};

export default RegisterScreen;
