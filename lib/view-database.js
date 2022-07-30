//
// made by fixedOtter 29.7.2022
//

// const mysql = require('mysql2');
// const { Sequelize } = require('sequelize');
// const Department = require(`${__dirname}/../models/Department.model.js`)(sequelize);

const services = require('../db/services');

const viewDatabase = {
  viewHandler: (userViewInput) => {

    switch (userViewInput) {
      case 'View All Employees':
      services.printEmployees();
        break;
      case 'View Employees by Manager Name':
      services.printEmployees('man');
        break;
      case 'View Employees by Department':
      services.printEmployees('dep');
        break;
      case 'View All Roles':
      services.printRoles();
        break;
      case 'View All Departments':
      services.printDepartments();
        break;
      case 'View Salary Cost of Department':

        break;
      default:
        break;
    }
  }
}

module.exports = viewDatabase;

// ['View All Employees', 'View Employees by Manager Name', 'View Employees by Department', 'View All Roles', 'View All Departments', 'View Salary Cost of Department']