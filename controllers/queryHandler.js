//
// made by fixedOtter on 1.8.2022
//

/* imported goodies */
const db = require('../db/connection');
const inquirer = require('inquirer');

module.exports = {
  viewHandler: async(userViewInput) => {
    let viewResponse
    switch (userViewInput) {
      case 'View All Employees':
      viewResponse = await db.query(`SELECT e.id, e.first_name, e.last_name, role.title, man.first_name AS manager, role.salary, d.name AS department FROM employee AS e INNER JOIN occupation AS role ON e.occupation_id = role.occupation_id INNER JOIN department AS d ON role.department_id = d.department_id LEFT OUTER JOIN employee AS man ON e.manager_id = man.id ORDER BY e.id ASC`);
      console.table(viewResponse[0]);
        break;
      case 'View Employees by Manager Name':
      viewResponse = await db.query(`SELECT e.id, e.first_name, e.last_name, role.title, man.first_name AS manager, role.salary, d.name AS department FROM employee AS e INNER JOIN occupation AS role ON e.occupation_id = role.occupation_id INNER JOIN department AS d ON role.department_id = d.department_id LEFT OUTER JOIN employee AS man ON e.manager_id = man.id ORDER BY man.first_name ASC`);
      console.table(viewResponse[0]);
        break;
      case 'View Employees by Department':
      viewResponse = await db.query(`SELECT e.id, e.first_name, e.last_name, role.title, man.first_name AS manager, role.salary, d.name AS department FROM employee AS e INNER JOIN occupation AS role ON e.occupation_id = role.occupation_id INNER JOIN department AS d ON role.department_id = d.department_id LEFT OUTER JOIN employee AS man ON e.manager_id = man.id ORDER BY d.name ASC`);
      console.table(viewResponse[0]);
        break;
      case 'View All Roles':
      viewResponse = await db.query(`SELECT role.occupation_id AS 'role id', role.title, role.salary, d.name AS department FROM occupation AS role INNER JOIN department AS d ON role.department_id = d.department_id ORDER BY role.occupation_id ASC`);
      console.table(viewResponse[0]);
        break;
      case 'View All Departments':
      viewResponse = await db.query(`SELECT d.department_id AS 'department id', d.name FROM department AS d`);
      console.table(viewResponse[0]);
        break;
      case 'View Salary Cost of Department':
      viewResponse = await db.query(`SELECT d.department_id AS 'department id', d.name, SUM(role.salary) AS 'salary cost' FROM department AS d OUTER JOIN occupation AS role ON role.department_id = d.department_id ORDER BY d.department_id ASC`);
      console.table(viewResponse[0]);
        break;
      default:
        break;
    }
  },
  modifyHandler: async(userModifyInput) => {
    // lil int checker func for input validation
    const intChecker = (value) => {
      return !isNaN(value) ? true : 'Input needs to be a number value';
    };

    let modResponse
    switch (userModifyInput) {
      case 'Add Department':
      // prompting user to see what department they want to add
      let newDep = await inquirer.prompt([
        {
          name: 'depName',
          message: 'What is the name of the department you want to add?',
          // NTH: validation
        }
      ]);
      // insert userinput into sql database
      modResponse = await db.query(`INSERT INTO department (name) VALUES ('${newDep.depName}')`);
      // if there are affectedRows then log success otherwise print custom error
      modResponse[0].affectedRows ? console.log('Department added successfully!') : console.log('Error adding Department!');
        break;
      case 'Add Role':
      // first grabbing current departments to add role to
      let currDeps = await db.query(`SELECT d.department_id, d.name FROM department AS d`);
      // prompting user with needed questions about role
      let newRole = await inquirer.prompt([
        {
          type: 'list',
          name: 'dep',
          message: 'Which department would you like to add the role to?',
          choices: currDeps[0]
        },
        {
          name: 'roleTitle',
          message: 'What is the title of the new role?'
        },
        {
          name: 'roleSalary',
          message: 'What is the salary of the role?',
          validate: intChecker
        }
      ]);
      // grabbing role id by comparing selected role to current roles from db
      roleID = currDeps[0].find(dep => dep.name == newRole.dep).department_id;
      // inserting captured input into occupation table
      modResponse = await db.query(`INSERT INTO occupation (title, salary, department_id) VALUES ('${newRole.roleTitle}, '${newRole.roleSalary}', ${roleID})`);

      
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
    let delResponse
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

const questions = [
  {
    name: 'addDepartment',
    message: 'What is the name of the department you would like to add?',
    when(answers) {
      return answers.modifyOption == 'Add Department';
    },
  },
  {
    name: 'roleID',
    message: 'Which department do you want to add the role to?',
    when(answers) {
      return answers.modifyOption == 'Add Role';
    },
  },
  {
    name: 'roleName',
    message: 'What is the name of the role you would like to add?',
    when(answers) {
      return answers.modifyOption == 'Add Role';
    },
  },
  {
    name: 'roleSalary',
    message: 'What is the salary of the new role?',
    when(answers) {
      return answers.modifyOption == 'Add Role';
    },
  },
  {
    name: 'addEmployee',
    message: 'What is the first name of the employee you would like to add?',
    when(answers) {
      return answers.modifyOption == 'Add Employee';
    },
  },
  
  {
    name: 'update',
    message: 'Who would you like to modify?',
    when(answers) {
      return answers.modifyOption == 'Update Employee Manager';
    },
  },
]