const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must have a name"],
  },
  email: String,
});

const Student = mongoose.model("Student", studentsSchema);

module.exports = Student;
