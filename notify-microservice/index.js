require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const app = express();
const { SendGrid } = require("./utils/SendGrid");
app.use(cors());
app.use(express.static(__dirname + "/public"));
SendGrid.initialize();

require("./routes")(app);

mongoose.connect(
  process.env.MONGO_URL,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
  function (err) {
    if (err) return console.log(err);
    app.listen(3002, async function () {
      console.log("Notify service is on...");
    });
  }
);
