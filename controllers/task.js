const Task = require("../models/task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-error");
const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.findAll();
  return res.status(200).json({ success: true, amount: tasks.length, tasks });
});

const getSingleTask = asyncWrapper(async (req, res, next) => {
  const id = parseInt(req.params.id);

  const task = await Task.findByPk(id);

  if (!task) {
    return next(createCustomError(`no task with id: ${id}`, 404));
  }

  return res.status(200).json({ msg: `success`, task: task });
});
const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  return res.status(200).json({ msg: "created", task: task });
});
const UpdateTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.update(req.body, { where: { id } });

  if (task[0] === 0) {
    return next(createCustomError(`no task with id ${id} to update`, 404));
  }
  return res.status(200).json({ msg: `update`, task });
});
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.destroy({ where: { id } });
  if (!task) {
    return next(createCustomError(`no task with id ${id} to delete`, 404));
  }
  return res.status(200).json({ msg: `deleted`, task });
});

module.exports = {
  getAllTask,
  getSingleTask,
  createTask,
  UpdateTask,
  deleteTask,
};
