//
// made by fixedOtter on 28.7.2022
//

/* imported goods */
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const cTable = require('console.table');

/* local imports */
const db = require('./db/connection.js');
const config = require('./models/config');
const input_handler = require('./lib/input-handler');

/* declarations */
const whichToDo = [
  {
    type: 'list',
    name: 'userMainChoice',
    message: 'What would you like to do?',
    choices: ['View Database Data', 'Add / Modify Database', 'Delete from Database']
  },
  {
    type: 'list',
    name: 'viewOption',
    message: 'What would you like to view?',
    choices: ['View All Employees', 'View Employees by Manager Name', 'View Employees by Department', 'View All Roles', 'View All Departments', 'View Salary Cost of Department'],
    when(answers) {
      return answers.userMainChoice == 'View Database Data';
    },
  },
  {
    type: 'list',
    name: 'modifyOption',
    message: 'What would you like to modify or add?',
    choices: ['Add Department', 'Add Role', 'Add Employee', 'Update Employee Manager'],
    when(answers) {
      return answers.userMainChoice == 'Add / Modify Database';
    },
  },
  {
    type: 'list',
    name: 'delOption',
    message: '[!!] What would you like to delete? [!!]',
    choices: ['Delete Department', 'Delete Role', 'Delete Employee'],
    when(answers) {
      return answers.userMainChoice == 'Delete from Database';
    },
  },
]

const getUserInput = () => {
  inquirer.prompt(whichToDo)
  .then((answers) => {
    console.log(`questions ran, and here are answers:`);
    console.log(JSON.stringify(answers, null, '  '));

    db.authenticate()
    .then(res => {
      console.log(`Connected`);
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })



    // do logic pertaining to each option
    switch (answers.userMainChoice) {
      case 'View Database Data':
        input_handler.viewHandler(answers.viewOption);
        break;
      case 'Add / Modify Database':
      
        break;
      case 'Delete from Database':
        
        break;
      
      default:
        break;
    }

  })
  .catch((err) => {
    console.error(err);
  })
}





if (config.app.firstTime) {
  // run first time setup config utility then db sync
}
db.sync().then(() => {
  getUserInput();
});

// getUserInput();