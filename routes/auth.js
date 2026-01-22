const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Login = require("../models/Login");

// REGISTER USER
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, mobile, userId, password, gender } = req.body;

    if (!fullName || !email || !mobile || !userId || !password || !gender) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) return res.status(400).json({ message: "Email already registered!" });

    const existingUserId = await User.findOne({ userId });
    if (existingUserId) return res.status(400).json({ message: "User ID already taken!" });

    const newUser = new User({ fullName, email, mobile, userId, password, gender });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });

  } catch (err) {
    console.error("Auth Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// LOGIN USER
router.post('/login', async (req, res) => {
  try {
    const { userId, password } = req.body;

    if (!userId || !password) {
      return res.status(400).json({ message: "User ID and Password required!" });
    }

    const user = await User.findOne({ userId, password });

    if (!user) return res.status(401).json({ message: "Invalid User ID or Password!" });

    // Save login record
    const loginRecord = new Login({ userId, password });
    await loginRecord.save();

    res.status(200).json({ message: "Login successful!" });

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ EXPORT ROUTER CORRECTLY
module.exports = router;
