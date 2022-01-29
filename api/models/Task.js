const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("task", taskSchema);
