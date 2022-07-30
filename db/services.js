//
// made by fixedOtter 29.7.2022
//

const db = require('./connection');

module.exports = {
  printDepartments: () => {
    db.query(`SELECT name 'Department Name' FROM department`)
    .then(tableData => {
      console.table(tableData[0]);
    });
  },

  printRoles: () => {
    db.query(`SELECT title 'Role Title', salary 'Role Salary' FROM occupation`)
    .then(tableData => {
      console.table(tableData[0]);
    });
  },

  printEmployees: (sortBy) => {
    let queryString
    if (sortBy == 'man') {
      queryString = ``;
    } else if (sortBy == 'dep') {
      queryString = ``;
    } else {
      queryString = `SELECT first_name 'First Name', last_name 'Last Name', occupation.title 'Title' FROM employee JOIN occupation ON occupation.occupation_id = employee.occupation_id GROUP BY first_name, last_name, occupation.title ORDER BY last_name`;
    }


    db.query(queryString)
    .then(tableData => {
      console.table(tableData[0]);
    });
  },
  
}