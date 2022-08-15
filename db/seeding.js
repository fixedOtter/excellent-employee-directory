//
// made by fixedOtter on 2.8.2022
//

const db = require('./connection');
const { Department, Occupation, Employee } = require('../models');
db.sync()
  .then(async() => {
    console.log('<--- seed time boiii --->');
    console.log('<---  --->');

    await Department.bulkCreate([
      {
        departmentName: 'Leaders'
      },
      {
        departmentName: 'Business Development'
      },
      {
        departmentName: 'Creative'
      },
      {
        departmentName: 'Engineers'
      }
    ]);
    
    let Leaders, BusinessDev, Creative, Engineers;

    Leaders = await Department.findByPk(1);
    BusinessDev = await Department.findByPk(2);
    Creative = await Department.findByPk(3);
    Engineers = await Department.findByPk(4);

    await Leaders.createOccupation({
      title: 'CEO',
      salary: '12345678'
    });
    await Leaders.createOccupation({
      title: 'CFO',
      salary: '12345678'
    });
    await Leaders.createOccupation({
      title: 'HR Director',
      salary: '12345678'
    });

    await BusinessDev.createOccupation({
      title: 'Accounting Director',
      salary: '1234567'
    });
    await BusinessDev.createOccupation({
      title: 'Sales Director',
      salary: '1234567'
    });
    await BusinessDev.createOccupation({
      title: 'Salesperson',
      salary: '1234567'
    });

    await Creative.createOccupation({
      title: 'Creative Director',
      salary: '123456'
    });
    await Creative.createOccupation({
      title: 'UI Designer',
      salary: '123456'
    });
    await Creative.createOccupation({
      title: '3D Designer',
      salary: '123456'
    });

    await Engineers.createOccupation({
      title: 'Production Engineer',
      salary: '1234'
    });
    await Engineers.createOccupation({
      title: 'Backend Engineer',
      salary: '1234'
    });
    await Engineers.createOccupation({
      title: 'Frontend Engineer',
      salary: '1234'
    });
    
    let CEO, CFO, HRDir, AccDir, SalesP, CreativeDir, UIDes, threeDDes, ProdEng, BackEng, FrontEng;

    CEO = await Occupation.findOne({ where: { title: 'CEO' }});
    CFO = await Occupation.findOne({ where: { title: 'CFO' }});
    HRDir = await Occupation.findOne({ where: { title: 'HR Director' }});
    AccDir = await Occupation.findOne({ where: { title: 'Accounting Director' }});
    SalesP = await Occupation.findOne({ where: { title: 'Salesperson' }});
    CreativeDir = await Occupation.findOne({ where: {title: 'Creative Director' }});
    UIDes = await Occupation.findOne({ where: { title: 'UI Designer' }});
    threeDDes = await Occupation.findOne({ where: { title: '3D Designer' }});
    ProdEng = await Occupation.findOne({ where: { title: 'Production Engineer' }});
    BackEng = await Occupation.findOne({ where: { title: 'Backend Engineer' }});
    FrontEng = await Occupation.findOne({ where: { title: 'Frontend Engineer' }});

    // TODO: setup the employee seeding

    
    
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