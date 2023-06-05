const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
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
    axios.get("https://zenquotes.io/api/quotes/").then((response) => {
      console.log("response.data: ", response.data);
      let result = response.data;
      res.send(result);
    });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Backend server is running on ${PORT}`);
});
