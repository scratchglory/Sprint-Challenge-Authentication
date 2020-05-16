const express = require("express").Router();
const Users = require("./users-model");
const restrict = require("../auth/authenticate-middleware");

// available to logged-in users due to 'restrict' middleware
// '/api/users'
express.get("/", restrict(), async (req, res, next) => {
  try {
    res.json(await Users.find());
  } catch (err) {
    next(err);
  }
});

module.exports = express;
