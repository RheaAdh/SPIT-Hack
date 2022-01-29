const mongoose = require("mongoose");
const User = require("./User");

const EventSchema = new mongoose.Schema({
  eventDate: {
    type: String,
  },
  eventType: {
    type: String,
  },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Event", EventSchema);
