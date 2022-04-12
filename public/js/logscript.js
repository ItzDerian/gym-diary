//logentry.handlebars
// console.log("hello");
//CALORIES BURNED PER MINUTE
//1LB=.453592KG
//(MET * BODY WEIGHT(KG) * 3.5)/200

//FUNCTION FOR EXERCISE OPTIONS
var userExerciseEL = document.querySelector('#Exercise');
var userBWEL = document.querySelector('#Weight');
var userRepsEL = document.querySelector('#RepsDone');
var userSetsEL = document.querySelector('#SetsDone');
var calBurnedEL = document.querySelector('#calBurned');

document
  .querySelector('.submit-workout-btn')
  .addEventListener('click', function (e) {
    var userExercise = userExerciseEL.value;
    var userBW = userBWEL.value;
    console.log(userExercise);
    var calBurned = 0;

    if (userExercise === 'Situps') {
      calBurned = (2.65 * userBW * 3.5) / 200;
    } else if (userExercise === 'Crunches') {
      calBurned = (2.65 * userBW * 3.5) / 200;
    } else if (userExercise === 'Pullups') {
      calBurned = (3.1 * userBW * 3.5) / 200;
    } else if (userExercise === 'Pushups') {
      calBurned = (3.3 * userBW * 3.5) / 200;
    } else if (userExercise === 'Lunges') {
      calBurned = (4.1 * userBW * 3.5) / 200;
    } else if (userExercise === 'Running stair incline') {
      calBurned = (15 * userBW * 3.5) / 200;
    } else {
      calBurned = (12.3 * userBW * 3.5) / 200;
    }
    calBurnedEL.innerHTML = calBurned.toFixed(2);
  });
