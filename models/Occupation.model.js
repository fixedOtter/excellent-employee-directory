//
// made by fixedOtter 29.7.2022
//

const { DataTypes, Model } = require('sequelize');

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

module.exports = Occupation;