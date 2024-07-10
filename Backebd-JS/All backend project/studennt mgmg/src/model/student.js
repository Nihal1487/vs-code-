const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNum: {
    type: Number,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
