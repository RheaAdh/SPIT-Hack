const mongoose = require("mongoose");
const User = require("./User");

const ExpenseSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  amount: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: { type: mongoose.Schema.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Expense", ExpenseSchema);
