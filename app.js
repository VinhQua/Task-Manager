const express = require("express");
const app = express();
const task = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
require("dotenv").config();
const connectDB = require("./db/db");
port = process.env.PORT || 3000;

//middleware

app.use(express.json());

//routes

app.use("/api/v1/tasks", task);

//not found
app.use(notFound);
const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
