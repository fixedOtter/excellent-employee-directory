//
// made by fixedOtter 29.7.2022
//

/* imported goods */
const mysql = require('mysql2/promise');
const config = require('./config');

const { host, port, user, password, database } = config.database;

module.exports = mysql.createPool({
  host: host,
  port: port,
  user: user,
  password: password,
  database: database
});