const Task = require("../models/task");
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

router.post("/", isLoggedIn, async (req, res) => {
  try {
    const task = await new Task({
      task: req.body.task,
      completed: req.body.completed,
      userId: req.user.id,
    }).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", isLoggedIn, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", isLoggedIn, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", isLoggedIn, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
