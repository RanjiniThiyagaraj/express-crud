const jwt = require("jsonwebtoken");

module.exports = {
  generateToken: (_id, secret) => {
    console.log(_id, secret);
    return jwt.sign({ id: _id }, secret, { expiresIn: "1h" });
  },
  validateToken: (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
      res.status(403).send("Token is required for authentication");
    } else {
      try {
        const decoded = jwt.verify(token, req.app.get("secretKey"));
        console.log(decoded);
        req.user = decoded;
        next();
      } catch (err) {
        res.status(401).send("Invalid token");
      }
    }
  },
};
