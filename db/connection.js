//
// made by fixedOtter 29.7.2022
//

const mysql = require('mysql2/promise');

const dbPromise = mysql.createPool({
  host: 'localhost',
  database: 'employee_dir',
  user: 'root',
  password: 'GarfMode69420N$4'
}).promise();

module.exports = dbPromise;