const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

//Crea la conexion a  la base de datos
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
});

module.exports = connection;
