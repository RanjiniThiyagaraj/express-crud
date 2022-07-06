const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/express-crud";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

module.exports = mongoose;
