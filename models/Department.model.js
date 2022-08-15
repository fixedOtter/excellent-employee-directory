//
// made by fixedOtter 29.7.2022
//

const { DataTypes, Model } = require('sequelize');

class Department extends Model {} // defining department as a model

Department.init({
  departmentName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: require('../db/connection'),
  modelName: 'department'
});

module.exports = Department;