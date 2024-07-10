const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const db = require("./db/conn");
const Student = require("./model/student");
const studentRouter  = require("./router/rout")
app.use(express.json());
app.use(studentRouter)


app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
