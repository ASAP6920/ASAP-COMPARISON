const mongoose = require("mongoose");

const modelSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  modelId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  brandId: {
    type: String,
    required: true,
  },
});
const Model = mongoose.model("Model", modelSchema);
module.exports = Model;

