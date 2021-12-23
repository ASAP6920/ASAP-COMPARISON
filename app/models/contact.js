const mongoose = require('mongoose')
const momentTimezone = require("moment-timezone");
const dateIndia = momentTimezone.tz(Date.now(), "Asia/Kolkata").format();

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  },
  { timestamps: {
    type: Date,
    default: () => momentTimezone.tz(Date.now(), "Asia/Kolkata").format()
  } }
);

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact