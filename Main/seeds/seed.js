const sequelize = require('../config/connection');
const { User, Exercise, Log } = require('../models');

const userData = require('./userData.json');
const exerciseData = require('./exerciseData.json');
const logData = require('./logData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const workout = await Exercise.bulkCreate(exerciseData, {
    returning: true,
  });

  for (const logs of logData) {
    await Log.create({
      ...logs,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }



  process.exit(0);
};

seedDatabase();
