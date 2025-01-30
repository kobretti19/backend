const Student = require("./../models/studentModel");

exports.getAll = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const newStudent = await Student.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.status(200).json({
      status: "success",
      data: newStudent,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    await Student.findById(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.viewStudents = async (req, res) => {
  try {
    res.render("students");
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
