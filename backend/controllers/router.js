const express = require("express");
const router = new express.Router();
const bcrypt = require('bcrypt');
const UserModel = require("../models/UserSchema");
const AppointmentModel = require("../models/Appointment");

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'This is a test route.' });
});

// Login route
router.post('/login', async (req, res) => {
  const { email, pwd } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email " });
    }
    const isMatch = await bcrypt.compare(pwd, user.pwd);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: error });
    res.status(500).json({ error: "Internal server error" });
  }
});

// Personal Info route
router.post('/personalinfo', async (req, res) => {
  const { name, email, pwd, cpwd, phoneno, address, birthday, gender } = req.body;

  try {
    const existEmail = await UserModel.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    if (pwd !== cpwd) {
      return res.status(400).json({ error: "Password and Confirm Password do not match" });
    }

    const hashedPwd = await bcrypt.hash(pwd, 10);
    const newUserinfo = new UserModel({ name, email, pwd: hashedPwd, phoneno, address, birthday, gender });
    const savedUserinfo = await newUserinfo.save();
    res.status(200).json({ message: "User info saved successfully", user: savedUserinfo });
  } catch (error) {
    res.status(500).json({ error: error });
    res.status(500).json({ error: "Failed to save user info" });
  }
});

// Get user by email
router.get('/Users/:email', async (req, res) => {
  const { email } = req.params;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update user info
router.put('/personalinfo', async (req, res) => {
  const { id, ...updatedData } = req.body;
  try {
    const user = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

// Create appointment
router.post('/myappointments', async (req, res) => {
  const appointmentData = req.body;
  try {
    const newAppointment = new AppointmentModel(appointmentData);
    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to book appointment', details: error.message });
  }
});

// Get appointments by email
router.get('/myappointments', async (req, res) => {
  const { userEmail } = req.query;
  try {
    if (!userEmail) {
      return res.status(400).json({ error: 'User email is required' });
    }
    const appointments = await AppointmentModel.find({ userEmail });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments', details: error.message });
  }
});

// Delete appointment by ID
router.delete('/myappointments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await AppointmentModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
});

module.exports = router;
