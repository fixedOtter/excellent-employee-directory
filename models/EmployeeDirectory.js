//
// made by fixedOtter 29.7.2022
//

// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');


const config = require('./config');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');


module.exports = db = {};

initialize();

async function initialize() {
  /* creates the db if it doesn't already exist */
  // grabbing data from config because why the heck not
  console.log(config.database);
  const { host, port, user, password, database } = config.database;
  // creating connection to sql server
  const connection = await mysql.createConnection({ host, port, user, password });
  // querying server and actually creating db if it doesn't exist
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

  // connecting to the db with sequelize
  const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

  // initializing models and add them to the exported db object
  db.Department = require('./Department.model')(sequelize);

  // sync all models with database
  await sequelize.sync({ alter: true });
}