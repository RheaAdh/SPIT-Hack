const mongoose = require("mongoose");
const User = require("./User");

const ExpenseSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  eventName: {
    type: String,
  },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
