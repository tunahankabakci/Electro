const express = require("express");
const User = require("../models/User");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/users/register", async (req, res) => {
  // Create a new user
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post("/users/update",auth, async (req, res) => {
  // Update a user
  try {
    const filter = req.headers.authorization;
    const update = req.body;
    await User.findOneAndUpdate(filter, update, { returnOriginal: false });
  } catch (error) {
    res
      .status(401)
      .send({ error: "Update failed! Check authentication credentials" });
  }
});

router.post("/users/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res
      .status(401)
      .send({ error: "Login failed! Check authentication credentials" });
  }
});

router.get("/users/profile", auth, async (req, res) => {
  // View logged in user profile
  res.send(req.user);
});

router.post("/users/logout", auth, async (req, res) => {
  // Log user out of the application
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/users/logoutall", auth, async (req, res) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
