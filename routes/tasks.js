const express = require("express");

const router = express.Router();
const {
  getAllTask,
  getSingleTask,
  createTask,
  UpdateTask,
  deleteTask,
} = require("../controllers/task");
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).patch(UpdateTask).delete(deleteTask);

module.exports = router;
