const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Expense = require("../models/Expense");
const createSheet = require("../utils/createSheet");

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
  console.log("here");
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

router.get("/createSheet/:userId", async (req, res) => {
  try {
    console.log("bybebybeyeby");
    const response = await Expense.find({ userId: req.params.userId });
    console.log("okokokok");
    console.log(response);
    if (response) {
      await createSheet(response).then((file) => {
        file.write("Expenses.xlsx", res);
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Please Try Again" });
  }
});

router.get("/data", isLoggedIn, async (req, res) => {
  try {
    const response = await Expense.find({ userId: req.user.id });
    // sort by category
    const mp = new Map();
    response.forEach((item) => {
      if (mp.has(item.category)) {
        mp.set(item.category, mp.get(item.category) + item.amount);
      } else {
        mp.set(item.category, item.amount);
      }
    });
    const data = [];
    mp.forEach((value, key) => {
      data.push({
        title: key,
        value: value,
        color: `hsl(${(data.length * 360) / mp.size}, 100%, 50%)`,
      });
    });
    return res.send({ success: true, data: data });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Please Try Again" });
  }
});

module.exports = router;
