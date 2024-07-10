const mongoose = require("mongoose");
const color = require("ansi-colors")
mongoose
  .connect("mongodb://localhost:27017/UserRegistration")
  .then(() => {
    console.log(color.bgGreen.bold("Connection Successfull....."));
  })
  .catch((e) => {
    console.log(e);
  });
