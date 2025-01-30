const express = require("express");
const studentController = require("./../controllers/studentController");

const router = express.Router();

router.route("/").get(studentController.getAll).post(studentController.create);

router.route("/:id").delete(studentController.delete);

module.exports = router;
