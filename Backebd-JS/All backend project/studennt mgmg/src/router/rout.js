const express = require("express");
const router = new express.Router();
const Student = require("../model/student");

router.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    const newStudent = await student.save();
    console.log(newStudent);
    res.status(201).send(newStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/students/:rollNum", async (req, res) => {
  try {
    const rollNum = req.params.rollNum;
    const findStudent = await Student.find({ rollNum }).select({
      name: 1,
      rollNum: 1,
      _id: 0,
    });
    res.status(200).send(findStudent);
  } catch (error) {
    res.status(400).send(e);
  }
});

router.patch("/students/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).send(updateStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/students/:id", async (req, res) => {
  try {
    const updateStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).send(updateStudent);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
