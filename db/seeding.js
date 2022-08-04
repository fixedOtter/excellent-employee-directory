//
// made by fixedOtter on 2.8.2022
//

const db = require('./connection');
const { Department, Occupation, Employee } = require('../models');
db.sync()
  .then(() => {
    // Department.bulkCreate([
    //   {
    //     departmentName: 'Leaders'
    //   },
    //   {
    //     departmentName: 'Business Development'
    //   },
    //   {
    //     departmentName: 'Marketing'
    //   },
    //   {
    //     departmentName: 'Engineers'
    //   }
    // ]).then(departments => {
    //   console.table(departments);
    // });
    Department.findAll().then(departments => {
      console.table(departments[0].dataValues);
    });
    
    
    // Department.findByPk(1, {include: Occupation}).then(dep => {
    //   dep.createOccupation({
    //     title: 'CEO',
    //     salary: '69420'
    //   });
    // });
  });





// db.sync()
//   .then(() => {
//     Character.bulkCreate([
//       {
//         character_name: 'Bob'
//       },
//       {
//         character_name: 'Sarah'
//       },
//       {
//         character_name: 'Tom'
//       }
//     ]).then(characters => {
//       characters.forEach(char => {
//         char.createLasagna({
//           pasta: 'Rotini',
//           cheese_type: 'Moz',
//           sauce: 'Red'
//         }).then(new_lasagna => {
//           console.log(new_lasagna);
//         });
//       })
//     });
//   });