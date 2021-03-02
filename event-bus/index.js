require("dotenv").config();
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  try {
    await axios.post(`${process.env.POSTS_SERVICE_URL}/events`, req.body);
    await axios.post(`${process.env.NOTIFY_SERVICE_URL}/events`, req.body);
    res.send({ status: "ok" });
  } catch (error) {
    console.log(`error: ${error}`);
  }
});

app.listen(3003, function () {
  console.log("Event Bus is On");
});
