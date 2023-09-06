const Task = require("../models/task");
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    return res.status(200).json({ msg: "success", tasks });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ msg: ` no task with id:  ${id}` });
    }

    return res.status(200).json({ msg: `success`, task: task });
  } catch (error) {
    // console.log(error);
    return res.status(404).json({ msg: `no task with id${id}` });
  }
};
const createTask = async (req, res) => {
  console.log(req.body);
  let { name, completed } = req.body;
  completed = completed === true ? completed : false;

  try {
    const task = Task.create(req.body);
    return res.status(200).json({ msg: "created", task: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const UpdateTask = async (req, res) => {
  const { id } = req.params;
  const { name, completed } = req.body;

  try {
    const task = await pool.query(
      "UPDATE task SET name = $1, completed = $2 WHERE id = $3",
      [name, completed, id]
    );
    if (task.rowCount === 0) {
      return res.status(200).json({ msg: `no task with id ${id} to update` });
    }
    return res.status(200).json({ msg: `update`, task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await pool.query("DELETE FROM task WHERE id = $1", [id]);
    if (task.rowCount === 0) {
      return res.status(404).json({ msg: `no task with id ${id} to delete` });
    }
    return res.status(200).json({ msg: `deleted`, task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  UpdateTask,
  deleteTask,
};
