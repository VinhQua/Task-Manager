const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:jJabI4fAcg5xAkqpsD6j@containers-us-west-116.railway.app:7400/railway"
);

const Task = sequelize.define(
  "Task",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    completed: { type: DataTypes.BOOLEAN },
    assignedBy: { type: DataTypes.STRING },
    doneBy: { type: DataTypes.STRING },
  },
  {
    modelName: "Task",
    tableName: "task",
  }
);
const SyncTable = async () => {
  Task.sync({ alter: true });
};
// SyncTable();
module.exports = Task;
