const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const Brand = mongoose.model("Brand", brandSchema);
module.exports = Brand;
