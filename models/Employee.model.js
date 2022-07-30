//
// made by fixedOtter 29.7.2022
//

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Employee = sequelize.define('Employee', {
  first_name
})


























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