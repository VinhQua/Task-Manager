const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "jJabI4fAcg5xAkqpsD6j",
  host: "containers-us-west-116.railway.app",
  port: 7400,
  database: "railway",
});

module.exports = pool;
