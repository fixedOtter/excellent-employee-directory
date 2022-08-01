//
// made by fixedOtter 29.7.2022
//

const db = require('./connection');

module.exports = {
  returnDepartments: () => {
    db.query(`SELECT name 'Department Name' FROM department`, (err, data) => {
      err ? console.error(err) : console.table(data[0]);
    });
  },

  returnRoles: () => {
    db.query(`SELECT title 'Role Title', salary 'Role Salary' FROM occupation`)
    .then(tableData => {
      console.table(tableData[0]);
    });
  },

  returnEmployees: (sortBy) => {
    let queryString = `SELECT first_name 'First Name', last_name 'Last Name', occupation.title 'Title', department.name 'Department' FROM employee INNER JOIN occupation ON occupation.occupation_id = employee.occupation_id LEFT JOIN department ON department.department_id = occupation.occupation_id GROUP BY first_name, last_name, occupation.title, department.name ORDER BY `;

    // when querying a table, i don't have to use an alias for the tables i join unless they are the same table name. if i want to query the employee table with manager data, i have to create alias names for them to be 

    if (sortBy == 'man') {
      queryString += ``;
    } else if (sortBy == 'dep') {
      queryString += `department.name`;
    } else {
      queryString = `SELECT first_name 'First Name', last_name 'Last Name', occupation.title 'Title' FROM employee JOIN occupation ON occupation.occupation_id = employee.occupation_id GROUP BY first_name, last_name, occupation.title ORDER BY last_name`;
    }

    db.query(queryString)
    .then(tableData => {
      console.table(tableData[0]);
    });
  },
  
}