const mongoose = require("mongoose");
const DB = process.env.DATABASE;
const connection = mongoose.connect;
connection(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
})
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Connection failed...");
  });
