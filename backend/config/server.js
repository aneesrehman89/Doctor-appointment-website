const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");
require("dotenv").config(); // Import dotenv to access environment variables

// Define the allowed origins based on the environment
const allowedOrigins = process.env.VERCEL === 'true'
  ? ["https://doctor-appointment-frontend-virid.vercel.app"] // Production frontend on Vercel
  : [process.env.LOCAL_ORIGIN, "http://localhost:3000"]; // Local development, explicitly including localhost:3000

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,  // Use allowed origins dynamically based on environment
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, etc)
  })
);

// Routes
app.use(router);

// Default route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Start the server and listen on port 8009
const PORT = process.env.PORT || 8009; // If you want to allow dynamic port, or default to 8009
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

