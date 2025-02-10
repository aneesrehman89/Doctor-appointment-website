const express = require("express");
const app = express();
const db = require("../config/connect");
const router = require("../controllers/router");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(router);

// Export the app as a serverless function
module.exports = (req, res) => {
  app(req, res);
};
