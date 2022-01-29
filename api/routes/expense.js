const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Expense = require("../models/Expense");

router.post("/", isLoggedIn, async (req, res) => {
  console.log("inside expense post");
  const { category, amount } = req.body;
  try {
    const item = await new Expense({
      category,
      amount,
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

module.exports = router;
