const User = require('./User');
const Exercise = require('./Exercise');
const Log = require('./Log');

User.hasMany(Log, {
    foreignKey: 'user_id',
  });
  
  Log.belongsTo(User, {
    foreignKey: 'user_id',
  });
  
  Exercise.hasMany(Log, {
    foreignKey: 'exercise_id',
  });
  
  Log.belongsTo(Exercise, {
    foreignKey: 'exercise_id',
  });

module.exports = { User, Exercise, Log };
