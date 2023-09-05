const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "02032001",
  host: "localhost",
  port: 5432,
  database: "taskmanager",
});

module.exports = pool;
