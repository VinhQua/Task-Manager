const express = require("express");
const app = express();
const task = require("./routes/tasks");
require("dotenv").config();
const connectDB = require("./db/db");
port = process.env.PORT || 3000;

//middleware

app.use(express.json());
//routes

app.use("/api/v1/tasks", task);

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
