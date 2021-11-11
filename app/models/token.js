const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: '15m',
    default: Date.now,
  },
});
const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;
