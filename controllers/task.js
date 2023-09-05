const pool = require("../db/db");

const getAllTask = async (req, res) => {
  try {
    const tasks = await pool.query("SELECT * FROM task");
    return res.status(200).json({ msg: "success", tasks: tasks.rows });
  } catch (error) {
    console.log(error);
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    if (!task) {
      return res.status(200).json({ msg: `success no task with id${id}` });
    }
    return res.status(200).json({ msg: `success`, task: task.rows[0] });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: `no task with id${id}` });
  }
};
const createTask = async (req, res) => {
  console.log(req.body);
  const { name, completed } = req.body;
  try {
    const task = await pool.query(
      "INSERT into task (name,completed) VALUES($1,$2) RETURNING *",
      [name, completed]
    );
    return res.status(200).json({ msg: "created", task: task.rows[0] });
  } catch (error) {
    console.log(error);
  }
};
const UpdateTask = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  res.status(200).json({ msg: `update task with id ${id} and name ${name}` });
};
const deleteTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ msg: `delete task with id ${id}` });
};

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  UpdateTask,
  deleteTask,
};
