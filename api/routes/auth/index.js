const express = require("express");
const router = express.Router();

const isLoggedIn = require("../../middleware/isLoggedIn");
const LoginUser = require("./login");
const RegisterUser = require("./register");
const GetUser = require("./getuser");
const getUserFromToken = require("./getuserfromtoken");

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/getuser", isLoggedIn, GetUser);
router.get("/user/:token", getUserFromToken);

module.exports = router;
