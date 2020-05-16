/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };

const jwt = require("jsonwebtoken");
function restrict() {
  return async (req, res, next) => {
    const authError = {
      message: "MIDDLEWARE says you shall not pass!!!",
    };

    try {
      console.log("HEADERS", req.headers);

      // validate token
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json(authError);
      }

      jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
        // if error is NOT empty
        if (err) {
          return res.status(401).json(authError);
        }
        // for later use if needed
        req.token = decodedPayload;
        next();
      });
    } catch (err) {
      next(err);
    }
  };
}

module.exports = restrict;
