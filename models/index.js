//
// made by fixedOtter on 3.8.2022
//

/* importing the models */
const Department = require('./Department.model');
const Occupation = require('./Occupation.model');
const Employee = require('./Employee.model');

/* defining model relationships (aww) */
// department has many occupations
Department.hasMany(Occupation);
Occupation.belongsTo(Department);
// occupation has many employees
Occupation.hasMany(Employee);
Employee.belongsTo(Occupation);
// employee has one manager
Employee.hasOne(Employee, {as: 'manager'});


/* exporting the now related goods */
module.exports = {
  Department,
  Occupation,
  Employee
}