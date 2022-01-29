const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Expense = require("../models/Expense");

router.post("/", isLoggedIn, async (req, res) => {
  console.log("inside expense post");
  const { category, amount, methodType } = req.body;
  try {
    const item = await new Expense({
      category,
      amount,
      methodType,
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
  try {
    const items = await Expense.find({ userId: req.user.id });
    return res.send({ success: true, data: items });
  } catch (error) {
    res.send(error);
  }
});

//Get total sum of all expenses
router.get("/total", isLoggedIn, async (req, res) => {
  console.log("inside expense total");
  try {
    const items = await Expense.find({ userId: req.user.id });
    console.log(items);
    let total = 0;
    items.forEach((item) => {
      if (item.methodType === "Income") total += item.amount;
      else total -= item.amount;
    });

    console.log(total);
    return res.send({ success: true, data: total });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
