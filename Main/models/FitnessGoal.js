const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class FitnessGoal extends Model {}

FitnessGoal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
      model: 'user',
      key: 'id',
    },
  },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'fitnessGoal',
  }
);
//const seedFitnessGoal = () => FitnessGoal.bulkCreate(FitnessGoalData);

module.exports = FitnessGoal;