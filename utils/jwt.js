const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: (_id, secret) => {
    console.log(_id, secret);
    return jwt.sign({ id: _id }, secret, { expiresIn: "1h" });
  },
};
