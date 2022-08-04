//
// made by fixedOtter 29.7.2022
//

const { Sequelize } = require('sequelize');
const config = require('../config/config');

const { host, database, user, pass, dialect, logging } = config.database;

module.exports = new Sequelize(database, user, pass, {
  host: host,
  dialect: dialect,
  logging: logging
});