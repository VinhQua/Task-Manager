const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:jJabI4fAcg5xAkqpsD6j@containers-us-west-116.railway.app:7400/railway"
);

const Task = sequelize.define(
  "Task",
  {
    name: { type: DataTypes.STRING, allowNull: false,set(value){
      this.setDataValue('name',value.trim())
    } },
    completed: { type: DataTypes.BOOLEAN,
    defaultValue:false },
    
  },
  {
    modelName: "Task",
    tableName: "task",
  }
);
const SyncTable = async () => {
  Task.sync({ alter: true });
};
SyncTable();
module.exports = Task;
