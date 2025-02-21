// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, authUser } = require("../controllers/userControllers");



// POST request to register a new user
router.post("/", registerUser);

// POST request for user login/authentication
router.post("/login", authUser);

module.exports = router;

