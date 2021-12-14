const mongoose = require("mongoose");

const detailSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  modelId: {
    type: String,
    required: true,
  },
  trending: {
    type: String,
    default: "No",
  },
  preCompared: {
    type: String,
    default: "No",
  },
  brandName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  colorName: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: String,
    required: true,
  },
  displaySize: {
    type: String,
    required: true,
  },
  display1: {
    type: String,
    required: true,
  },
  networkImg: {
    type: String,
    required: true,
  },
  network: {
    type: String,
    required: true,
  },
  chipsetImg: {
    type: String,
    required: true,
  },
  chipset: {
    type: String,
    required: true,
  },
  batteryImg: {
    type: String,
    required: true,
  },
  battery: {
    type: String,
    required: true,
  },
  faceImg: {
    type: String,
    required: true,
  },
  face: {
    type: String,
    required: true,
  },
  fingerImg: {
    type: String,
    required: true,
  },
  finger: {
    type: String,
    required: true,
  },
  waterImg: {
    type: String,
    required: true,
  },
  water: {
    type: String,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  display2: {
    type: String,
    required: true,
  },
  display3: {
    type: String,
    required: true,
  },
  dimension: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  cpu: {
    type: String,
    required: true,
  },
  gpu: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
    required: true,
  },
  wifi: {
    type: String,
    required: true,
  },
  bluetooth: {
    type: String,
    required: true,
  },
  nfc: {
    type: String,
    required: true,
  },
  batteryCapacity: {
    type: String,
    required: true,
  },
  charging: {
    type: String,
    required: true,
  },
  sim: {
    type: String,
    required: true,
  },
  connector: {
    type: String,
    required: true,
  },
  colors: {
    type: String,
    required: true,
  },
  collections: [
    {
      _id: false,
      color: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
});
const Detail = mongoose.model("Detail", detailSchema);
module.exports = Detail;
