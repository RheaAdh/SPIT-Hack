const User = require("../models/User");
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");

const getDiffInDays = (date) => {
  var date2 = new Date(date);
  var date1 = new Date(Date.now());
  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();
  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return Difference_In_Days;
};

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

router.post("/date", isLoggedIn, async (req, res) => {
  try {
    const { periodDate, periodCycle, periodlength } = req.body;
    let user = await User.findOne({ _id: req.user.id });
    user.periodDate = periodDate;
    user.periodCycle = periodCycle;
    // user.periodLength = periodlength;
    await user.save();
    console.log(periodDate);
  } catch (error) {
    res.send(error);
  }
});

router.get("/daysleft", isLoggedIn, async (req, res) => {
  //No.of days left for period to come
  try {
    const user = await User.findOne({ _id: req.user.id });
    let nextDate = addDays(user.periodDate, user.periodCycle);

    const daysLeft = getDiffInDays(nextDate);
    return res.send({ success: true, data: daysLeft });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
