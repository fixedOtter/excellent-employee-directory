//
// made by fixedOtter 29.7.2022
//

const Occupation = require('./Occupation.model');
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

// Employee.belongsTo(Occupation);
// Occupation.hasMany(Employee);

Employee.hasOne(Employee, {as: 'Manager'});

module.exports = Employee;

/* CREATE TABLE department(
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE occupation(
  occupation_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE employee(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  occupation_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY (occupation_id) REFERENCES occupation(occupation_id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
); */