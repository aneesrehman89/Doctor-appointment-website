const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");

const port = 8009; // Use PORT from env or default to 8009

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'This is a test route.' });
});

app.use("/api", router); // Add `/api` prefix for all routes

// Start server only in a local environment
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});




// Export the app for Vercel
module.exports = app;
