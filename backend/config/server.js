const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"], 
    methods: ["POST", "GET"], 
    credentials: true, 
  })
);

// Routes
app.use(router);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Export the app for Vercel
module.exports = app;