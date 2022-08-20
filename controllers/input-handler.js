//
// made by fixedOtter on 1.8.2022
//
const db = require('../db/connection');

module.exports = {
  viewHandler: async(userViewInput) => {
    switch (userViewInput) {
      case 'View All Employees':
      console.log(await db.query(`SELECT * FROM employee JOIN occupation AS role ON employee.occupation_id = occupation.occupation_id ORDER BY employee.first_name ASC`));
        break;
      case 'View Employees by Manager Name':

        break;
      case 'View Employees by Department':

        break;
      case 'View All Roles':

        break;
      case 'View All Departments':

        break;
      case 'View Salary Cost of Department':

        break;
      default:
        break;
    }
  },
  modifyHandler: async(userModifyInput) => {
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
  delHandler: async(userDelInput) => {
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