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
const config = require('./config/config');
const input_handler = require('./lib/input-handler');

/* declarations */
const whichToDo = [
  {
    type: 'list',
    name: 'userMainChoice',
    message: 'What would you like to do?',
    choices: ['View Database Data', 'Add / Modify Database', 'Delete from Database', 'Quit application']
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

const getUserInput = async() => {
  const answers = await inquirer.prompt(whichToDo);
    // console.log(`questions ran, and here are answers:`);
    // console.log(JSON.stringify(answers, null, '  '));

  await db.authenticate(); // should just make sure the database is synced before executing switch funct below

  // do logic pertaining to each option
  switch (answers.userMainChoice) {
    case 'View Database Data':
      await input_handler.viewHandler(answers.viewOption);
      break;
    case 'Add / Modify Database':
      await input_handler.modifyHandler(answers.modifyOption);
      break;
    case 'Delete from Database':
      await input_handler.delHandler(answers.delOption);
      break;
    case 'Quit application':
      console.log('Thanks for playing!');
      process.exit();
    default:
      console.log('Issue grabbing input. Please try again.');
      process.exit();
  }
  getUserInput();
}





if (config.app.firstTime) {
  // run first time setup config utility then db sync
}
db.sync().then(() => {
  getUserInput();
});

// getUserInput();