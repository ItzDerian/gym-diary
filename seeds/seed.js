const sequelize = require('../config/connection');
const { User, FitnessGoal, Exercise, Log } = require('../models');

const userData = require('./userData.json');
const fitnessGoalData = require('./fitnessGoalData.json');
const exerciseData = require('./exerciseData.json');
const dailyLogData = require('./dailyLogData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  for (const workout of exerciseData) {
    await Exercise.create({
      ...workout,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };
  
  for (const log of dailyLogData) {
    await Log.create({
      ...log,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  process.exit(0);
}
seedDatabase();
