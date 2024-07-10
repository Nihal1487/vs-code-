const express = require("express");
const User = require("../models/registers");
const router = new express.Router();
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser")
const auth = require("../middleware/auth")

router.get("/logout", auth, async (req,res) => {
  try {
    // for one device 
  //  req.user.tokens = req.user.tokens.filter((currentElement) => {
  //      return currentElement.token !== req.token;
  //    });

   // for all device 
    req.user.tokens = []

    res.clearCookie("jwt")
    console.log("Logout successfull");


    await req.user.save()

    res.render("login")
 
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post("/register", async (req, res) => {
  try {
    const password = req.body.password;

    if (password) {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
      });

      const token = await newUser.tokenGenrate();
      console.log(`token is ${token}`);
      const registered = await newUser.save();
      console.log(registered);

      // cookie genrate
      res.cookie("jwt", token, {
        expires: new Date(Date.now() + 30000),
        httpOnly: true,
      });

      res.status(201).render("index");
    } else {
      res.send("Enter a password");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});

// log in check

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userEmail = await User.findOne({ email: email });
    const isMatch = await bcrypt.compare(password, userEmail.password);

    const token = await userEmail.tokenGenrate();
    console.log(`token is ${token}`);


    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 60000),
      httpOnly: true,
    });

    if (isMatch) {
      res.status(201).render("index");
    } else {
      res.send("Invalid email or password");
    }
  } catch (error) {
    res.status(400).send("Invalid email or password");
  }
});

module.exports = router;
