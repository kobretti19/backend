const express = require("express");

const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const studentRouter = require("./routes/studentRoutes");
const studentController = require("./controllers/studentController");

app.use("/", (req, res) => {});

app.get("/", studentController.viewStudents);
app.use("/api/v1/students", studentRouter);

module.exports = app;
