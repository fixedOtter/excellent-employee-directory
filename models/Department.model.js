//
// made by fixedOtter 29.7.2022
//

const { DataTypes, Model } = require('sequelize');
const Occupation = require('./Occupation.model');

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

Department.hasMany(Occupation);
Occupation.belongsTo(Department);

module.exports = Department;

/* CREATE TABLE department(
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); */