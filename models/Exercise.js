const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    targetArea: {
      type: DataTypes.STRING,
      allowNull: false,
      values: ['Upper Body', 'Core', 'Lower Body']
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
  }
);


module.exports = Exercise;