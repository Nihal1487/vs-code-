const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
});

userSchema.methods.tokenGenrate = async function () {
 try{ const token = jwt.sign(
    { _id: this._id.toString() },
    process.env.SECRET_KEY
  );

this.tokens = this.tokens.concat({ token: token });
await this.save();
return token;}
catch (e)  {
   console.log(e);   
}
}



userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    console.log(`orignal password ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    console.log(`Hashed password password ${this.password}`);
  }
  next();
});

// crate collection
const User = mongoose.model("User", userSchema);

module.exports = User;
