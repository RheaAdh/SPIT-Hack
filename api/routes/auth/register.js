const User = require("../.././models/User");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;

    var user = await User.findOne({ email: email });

    if (!user) {
      const hashpwd = await bcrypt.hash(req.body.password, 10);
      let newtoken = uuidv4();
      user = new User({
        fullName: fullName,
        username: username,
        email: email,
        password: hashpwd,
      });
      await user.save();
      return res.send({
        success: true,
        data: "User successfully registered",
      });
    } else {
      return res.send({ success: false, data: "User already exists" });
    }
  } catch (err) {
    console.log("err:");
    console.log(err);
    return res.send({ success: false, data: "Server error" });
  }
};
