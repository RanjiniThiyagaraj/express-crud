const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("../../../utils/jwt");

const userController = {
  create: (req, res, next) => {
    userModel.create(req.body, (err, result) => {
      if (err) {
        next(err);
      } else {
        res.json({
          status: "success",
          message: "User created successfully",
          data: null,
        });
      }
    });
  },
  authenticate: (req, res, next) => {
    const { email, password } = req.body;

    userModel.findOne({ email: email }, (err, user) => {
      if (err) {
        next(err);
      } else {
        if (!user) {
          res.json({
            status: "Failure",
            message: "User not found",
            data: null,
          });
        } else {
          const isPasswordMatched = bcrypt.compareSync(password, user.password);
          if (!isPasswordMatched) {
            res.json({
              status: "Failure",
              message: "Password is not correct",
              data: null,
            });
          } else {
            const token = jwt.generateToken(user._id, req.app.get("secretKey"));
            res.json({
              status: "Success",
              message: "Login Successfully",
              data: {
                user: user,
                token: token,
              },
            });
          }
        }
      }
    });
  },
};

module.exports = userController;
