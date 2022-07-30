//
// made by fixedOtter 29.7.2022
//

// const mysql = require('mysql2');
// const { Sequelize } = require('sequelize');
// const Department = require(`${__dirname}/../models/Department.model.js`)(sequelize);

const db = require('../models/EmployeeDirectory');

const viewDatabase = {
  viewHandler: (userViewInput) => {

    switch (userViewInput) {
      case 'View All Employees':
        
        break;
      case 'View Employees by Manager Name':
      
        break;
      case 'View Employees by Department':
        
        break;
      case 'View All Roles':
      
        break;
      case 'View All Departments':
        Department.findAll().then((data) => {
          console.log(data);
        });
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