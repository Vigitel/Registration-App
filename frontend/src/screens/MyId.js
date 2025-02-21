// src/screens/MyId.js
import React, { useState } from "react";
import axios from "axios";
import "./MyId.css";

const MyId = () => {
  const [useremail, setUserEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState("");

  const fetchUserHandler = async (e) => {
    e.preventDefault();
    setUserData(null);
    setMessage("");

    try {
      // We can reuse the /api/users/login for demonstration,
      // or create a new endpoint if you prefer (like /api/users/find).
      const { data } = await axios.post("/api/users/login", { useremail });
      setUserData(data);
      setMessage("User found!");
    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "No user found!");
    }
  };

  return (
    <div className="myid-container">
      <h2>Find My ID</h2>
      <form onSubmit={fetchUserHandler} className="myid-form">
        <label>Enter Email</label>
        <input
          type="email"
          value={useremail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {message && <p className="myid-message">{message}</p>}

      {userData && (
        <div className="myid-info">
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

export default MyId;
