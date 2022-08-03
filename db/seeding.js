//
// made by fixedOtter on 2.8.2022
//

const db = require('./connection');
const Department = require('../models/Department.model');
const Occupation = require('../models/Occupation.model');
const Employee = require('../models/Employee.model');
db.sync()
  .then(() => {
    
  });











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