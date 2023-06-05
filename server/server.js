const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const db = require("./db/db-connection.js");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
app.get("/api/quotes", async (req, res) => {
  try {
    const response = await db.query("SELECT * FROM students");
    res.send(students);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Hola, Server listening on ${PORT}`);
});
