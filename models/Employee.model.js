//
// made by fixedOtter 29.7.2022
//

const { DataTypes, Model } = require('sequelize');

class Employee extends Model {} // defining Employee as a model

Employee.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
  }
}, {
  sequelize: require('../db/connection'),
  modelName: 'employee'
});



module.exports = Employee;