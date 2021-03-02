const express = require("express");
const jsonParser = express.json();
const { addUser } = require("../mongo/helpers");
const { events } = require("../enums");
const axios = require("axios");
const { sendNotifications } = require("../modules");

module.exports = function (app) {
  app.post("/addUser", jsonParser, async function (req, res) {
    if (!req.body) return res.sendStatus(400);
    const email = req.body.email;
    const result = await addUser({ email });
    axios.post(`${process.env.EVENT_BUS_URL}/events`, {
      event: events.addUser,
      data: null,
    });
    res.send(result);
  });
  app.post("/events", jsonParser, async function (req, res) {
    const { event, data } = req.body;
    switch (event) {
      case events.addPost:
        await sendNotifications(data);
        res.send({ status: "ok" });
        break;
      default:
        console.log(`Event: ${event}`);
        res.send({ status: "unknown event" });
    }
  });
};
