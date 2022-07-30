//
// made by fixedOtter 29.7.2022
//

const mysql = require('mysql2/promise');

const { Sequelize } = require('sequelize');

/* const dbPromise = mysql.createPool({
  host: 'localhost',
  database: 'employee_dir',
  user: 'root',
  password: 'GarfMode69420N$4'
}).promise(); */


const sequelize = new Sequelize('employee_dir', 'root', 'GarfMode69420N$4', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
// module.exports = dbPromise;