//
// made by fixedOtter on 1.8.2022
//

const db = require('../db/connection');
const { Department, Occupation, Employee } = require('../models');

const sequelizeTable = async(query) => {
  let displayTable = [];
  try {
    for (let i = 0; i < query.length; i++) {
      displayTable.push(query[i].dataValues)
    }
    return displayTable;
  } catch (error) {
    console.log(`Error parsing data to table; Error: ${error}`);
    return 1
  }
}

module.exports = {
  viewHandler: async(userViewInput) => {
    let data;
    switch (userViewInput) {
      case 'View All Employees':
        const allEmployees = await Employee.findAll({
          order: [
            ['firstName', 'ASC'],
          ],
          include: [
            {
              model: Occupation,
              as: 'occupation'
            },
            {
              model: Employee,
              as: 'manager'
            }
          ]
        });
        console.table(await sequelizeTable(allEmployees)); // FIXME: beautify with console.table
        break;
      case 'View Employees by Manager Name':
        console.table(await Employee.findAll({
          order: [
            ['manager', 'ASC'],
            ['firstName', 'ASC'],
          ]
        }).dataValues);
        break;
      case 'View Employees by Department':
        console.table(await Employee.findAll({
          order: [
            ['departmentId', 'ASC'],
            ['firstName', 'ASC'],
          ]
        }).dataValues);
        break;
      case 'View All Roles':
        console.log(await Occupation.findAll()); // FIXME: beautify with console.table
        break;
      case 'View All Departments':
        console.log(await Department.findAll()); // FIXME: beautify with console.table
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