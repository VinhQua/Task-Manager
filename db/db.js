const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgresql://postgres:jJabI4fAcg5xAkqpsD6j@containers-us-west-116.railway.app:7400/railway"
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connecting to DB");
  } catch (error) {
    console.error("Unable to connect to DB");
  }
};

module.exports = connectDB;
