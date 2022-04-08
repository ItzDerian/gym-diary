const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
=======
const { User, FitnessGoal, Exercise, DailyLog } = require('../models');

const userData = require('./userData.json');
const fitnessGoalData = require('./fitnessGoalData.json');
const exerciseData = require('./exerciseData.json');
const dailyLogData = require('./dailyLogData.json');
>>>>>>> 8b4a49751bb06723078744cea764d875746c4f2b

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

=======
    for (const log of dailyLogData) {
      await DailyLog.create({
        ...log,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
  
};
for (const workout of exerciseData) {
  await Exercise.create({
    ...workout,
    user_id: users[Math.floor(Math.random() * users.length)].id,
  });

process.exit(0);
}}
>>>>>>> 8b4a49751bb06723078744cea764d875746c4f2b
seedDatabase();
