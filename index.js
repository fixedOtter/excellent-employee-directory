//
// made by fixedOtter on 28.7.2022
//

/* imported goods */
const inquirer = require('inquirer');
/* local imports */
const queryHandler = require('./controllers/queryHandler');

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

  // do logic pertaining to each option
  switch (answers.userMainChoice) {
    case 'View Database Data':
      await queryHandler.viewHandler(answers.viewOption);
      break;
    case 'Add / Modify Database':
      await queryHandler.modifyHandler(answers.modifyOption);
      break;
    case 'Delete from Database':
      await queryHandler.delHandler(answers.delOption);
      break;
    case 'Quit application':
      console.log('Thanks for playing!');
      process.exit();
    default:
      console.log('Error grabbing input. Please try again.');
      process.exit();
  }
  getUserInput();
}



getUserInput();
