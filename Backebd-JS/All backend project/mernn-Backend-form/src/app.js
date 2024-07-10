require("dotenv").config()
const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const db = require("./db/conn.js");
const User = require("./models/registers.js");
const userRouter = require("./router/router.js");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth.js")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(userRouter);

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/home", (req, res) => {
  res.render("index");
});


app.get("/secret", auth ,(req, res) => {
  // console.log(`the coockie is  ${req.cookies.jwt}`);
  res.render("secret");
});

app.get("/logout" ,(req, res) => {
res.render("login")
});


app.get("/register", (req, res) => {
  res.render("register");
});

app.get("/login", (req, res) => {
  res.render("login");
});


app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
