const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model");
// const restrict = require("../auth/authenticate-middleware");
const jwt = require("jsonwebtoken");

// '/api/auth'
router.post("/register", async (req, res, next) => {
  // implement registration
  try {
    const { username } = req.body;
    const user = await Users.findById({ username }).first();

    if (user) {
      return res.status(409).json({
        message: "Name already taken",
      });
    }
    res.status(201).json(await Users.add(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials",
  };

  //
  try {
    const user = await Users.findBy({ username: req.body.username }).first();
    if (!user) {
      return res.status(401).json(authError);
    }

    // salting: bcrypt hashes generate diff results
    // compares hashes rather than using "!=="
    const passwordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordValid) {
      return res.status(401).json(authError);
    }
    // generate new token beause we aren't creating a session
    const tokenPayload = {
      userId: user.id,
      userRole: "normal", // this would normally come from the db
    };

    // send back to client
    res.json({
      message: `Welcome ${user.username}!`,

      // pulling seret string from .env which was added to our server script pacakge.json
      token: jwt.sign(tokenPayload, process.env.JWT_SECRET),
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
