// creating the schema here
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
