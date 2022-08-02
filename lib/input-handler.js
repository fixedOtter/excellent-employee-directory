//
// made by fixedOtter on 1.8.2022
//

const db = require('../db/connection');
const Department = require('../models/Department.model');
const Occupation = require('../models/Occupation.model');
const Employee = require('../models/Employee.model');

module.exports = {
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
  },
  modifyHandler: (userModifyInput) => {

    switch (userModifyInput) {
      case 'Add Department':
        
        break;
      case 'Add Role':
      
        break;
      case 'Add Employee':
        
        break;
      case 'Update Employee Manager':
      
        break;
      default:
        break;
    }
  },
  delHandler: (userDelInput) => {

    switch (userDelInput) {
      case 'Delete Department':
        
        break;
      case 'Delete Role':
      
        break;
      case 'Delete Employee':
        
        break;
      default:
        break;
    }
  }
};