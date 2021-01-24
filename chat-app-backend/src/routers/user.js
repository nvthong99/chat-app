const express = require("express");
const User = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const UserController = require("../controller/userController");
router.post("/user/register", async (req, res) => {
  try {
    const isduplicate = await User.findOne({ username: req.body.username });
    if (isduplicate) throw new Error();
    const user = new User(req.body);
    console.log(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
router.post("/user/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error({ error: "Invalid login credentials" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error({ error: "Invalid login credentials" });
    }
    const token = await user.generateAuthToken();
    res.json(token);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/user/me", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});
router.get("/users/all", UserController.getAllUser);
module.exports = router;
