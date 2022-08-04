//
// made by fixedOtter on 1.8.2022
//

const db = require('../db/connection');
const { Department, Occupation, Employee } = require('../models');

module.exports = {
  viewHandler: async(userViewInput) => {
    let data;
    switch (userViewInput) {
      case 'View All Employees':
        
        break;
      case 'View Employees by Manager Name':
      
        break;
      case 'View Employees by Department':
        
        break;
      case 'View All Roles':
        console.log(await Occupation.findAll());
        break;
      case 'View All Departments':
        console.log(await Department.findAll());
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
        Department.create({
          
        })
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

// some logic for updating specific row details
/* 
Character.update({
  characterName: `${charname}` // first defines what we're updating
}, {
  where: {
    id: `${id}` // then says where we're updating
  }
}).then(newChar => {
  console.table(newChar); // returns the object we just created
});
*/