require("dotenv").config({ path: __dirname + "/../.env" });
const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL; 
console.log("MONGO_URL from .env:", mongoURL);


mongoose.connect(mongoURL)
.then(() => console.log("Database Connected"))
.catch((err) => {
  console.error("Database Connection Error:", err);
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Database Error:", err);
});

db.on("disconnected", () => {
  console.warn("Database Disconnected");
});

module.exports = db;