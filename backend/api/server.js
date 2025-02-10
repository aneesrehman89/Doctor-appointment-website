const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', router); // Add `/api` prefix for all routes

// Export the app as a serverless function for Vercel
module.exports = (req, res) => {
  app(req, res); // This is the handler Vercel uses to invoke your app
};
