const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Expense = require("../models/Expense");
const createSheet = require("../utils/createSheet");
const https = require("https");
router.post("/", function (req, res) {
  var city = req.body.cityName;
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=cf86157524d7066886e1fd50c16c22a6&units=metric";

  https.get(url, function (response) {
    response.on("data", function (data) {
      //parses data into JSON format
      const weatherdata = JSON.parse(data);
      var temp = weatherdata.main.temp;
      var icon = weatherdata.weather[0].icon;
      var feels_like = weatherdata.main.feels_like;
      var imgURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png";

      return res.send({ success: true, data: temp });
    });
  });
});

module.exports = router;
