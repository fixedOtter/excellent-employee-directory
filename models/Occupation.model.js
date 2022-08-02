//
// made by fixedOtter 29.7.2022
//


const Department = require('./Department.model');
const { DataTypes, Model } = require('sequelize');
const Employee = require('./Employee.model');

class Occupation extends Model {} // defining Occupation as a model

Occupation.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salary: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize: require('../db/connection'),
  modelName: 'occupation'
});

// Department.hasMany(Occupation);
// Occupation.belongsTo(Department);

// Occupation.hasMany(Employee);
// Employee.belongsTo(Occupation);

module.exports = Occupation;


/* 
CREATE TABLE occupation(
  occupation_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
); */