const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Event = require("../models/Event");

router.post("/", isLoggedIn, async (req, res) => {
  const { date, eventType } = req.body;
  try {
    const item = await new Event({
      date,
      eventType,
      userId: req.user.id,
    });
    console.log(item);
    await item.save();
    console.log(item);
    return res.send({ success: true, data: item });
  } catch (error) {
    res.send(error);
  }
});

router.get("/", isLoggedIn, async (req, res) => {
  console.log("here");
  try {
    const items = await Event.find({ userId: req.user.id });
    return res.send({ success: true, data: items });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
