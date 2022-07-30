//
// made by fixedOtter 29.7.2022
//


const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Department = sequelize.define('Department', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Department.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  }, { sequelize });
  return Department;
}
