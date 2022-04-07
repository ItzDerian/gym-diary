const User = require('./User');
//const FitnessGoal = require( './FitnessGoal' );
const Log = require('./Log');
const Exercise = require('./Exercise');


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

module.exports = { User, Log, Exercise };
