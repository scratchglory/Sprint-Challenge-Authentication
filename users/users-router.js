const express = require("express").Router();
const Users = require("./users-model");
const restrict = require("../auth/authenticate-middleware");

// available to logged-in users due to 'restrict' middleware
// '/api/users'
express.get("/", restrict(), async (req, res, next) => {
  try {
    res.status(200).json(await Users.find());
  } catch (err) {
    next(err);
  }
});

express.get("/:id", restrict(), async (req, res, next) => {
  try {
    const user = await Users.findById(req.params.id);

    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = express;
