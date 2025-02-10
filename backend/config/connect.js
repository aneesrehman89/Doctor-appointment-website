require("dotenv").config({ path: "../.env" }); // Load environment variables

const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_DB; // Read from .env

mongoose
  .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

const db = mongoose.connection;
module.exports = db;
