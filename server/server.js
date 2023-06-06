const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
const API_KEY = process.env.API_KEY;

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "Hola, from My template ExpressJS with React-Vite" });
});

// create the get request for students in the endpoint '/api/students'
app.get("/api/quotes", async (req, res) => {
  try {
    axios.get(`https://zenquotes.io/api/random/${API_KEY}`).then((response) => {
      console.log("response.data: ", response.data);
      let result = response.data;
      res.send(result);
    });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

//get by keyword:
//success, confidence, future, inspiration,
// anxiety, kindness, work, today, excellence, dreams

//1.get for keyword success
app.get("/api/keyword/success", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=success`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});
//2. get for keyword confidence
app.get("/api/keyword/confidence", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=confidence`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

//3. future
app.get("/api/keyword/future", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=future`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

//4. inspiration
app.get("/api/keyword/inspiration", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=inspiration`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});
//5. anxiety 
app.get("/api/keyword/anxiety", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=anxiety`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});

//kindness
app.get("/api/keyword/kindness", async (req, res) => {
  try {
    axios
      .get(`https://zenquotes.io/api/quotes/${API_KEY}&keyword=kindness`)
      .then((response) => {
        console.log("response.data: ", response.data);
        let result = response.data;
        res.send(result);
      });
  } catch (error) {
    console.log("error from catch server.js", error);
  }
});



//work




//today


//excellence






//dreams















// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Backend server is running on ${PORT}`);
});
