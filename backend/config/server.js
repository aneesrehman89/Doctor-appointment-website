const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("../config/connect"); // Ensure DB connection is established
const router = require("../controllers/router");

dotenv.config(); // Load environment variables

const app = express();

// Only allow the production frontend
const allowedOrigins = ["https://doctor-appointment-frontend-virid.vercel.app"];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins, // Only allow production frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, 
  })
);

// Routes
app.use(router);

// Default route for health check
app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

// Start server
const PORT = process.env.PORT || 8009;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
