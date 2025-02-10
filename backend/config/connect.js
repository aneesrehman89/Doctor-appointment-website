require("dotenv").config({ path: "../.env" }); // Load environment variables

const mongoose = require("mongoose");       // removing url

const mongoURL = process.env.MONGO_DB; // Read from .env

mongoose
  .connect(mongoURL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const db = mongoose.connection;
module.exports = db;
