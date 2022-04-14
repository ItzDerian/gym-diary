//logentry.handlebars
// console.log("hello");
//CALORIES BURNED PER MINUTE
//1LB=.453592KG
//(MET * BODY WEIGHT(KG) * 3.5)/200

//FUNCTION FOR EXERCISE OPTIONS
//var userExerciseEL = document.querySelector('#Exercise');
//var userBWEL = document.querySelector('#Weight');
//var reps = document.querySelector('#RepsDone');
//var sets = document.querySelector('#SetsDone');
//var calBurnedEL = document.querySelector('#calBurned');

document
  .querySelector('.submit-workout-btn')
  .addEventListener('click', function (e) {
    var exercise = exercise.value;
    var userBW = weight.value;
    console.log(userExercise);
    var calBurned = 0;

    if (exercise === 'Situps') {
      calBurned = (2.65 * userBW * 3.5) / 200;
    } else if (exercise === 'Crunches') {
      calBurned = (2.65 * userBW * 3.5) / 200;
    } else if (exercise === 'Pullups') {
      calBurned = (3.1 * userBW * 3.5) / 200;
    } else if (exercise === 'Pushups') {
      calBurned = (3.3 * userBW * 3.5) / 200;
    } else if (exercise === 'Lunges') {
      calBurned = (4.1 * userBW * 3.5) / 200;
    } else if (exercise === 'Running stair incline') {
      calBurned = (15 * userBW * 3.5) / 200;
    } else {
      calBurned = (12.3 * userBW * 3.5) / 200;
    }
    //calBurnedEL.innerHTML = calBurned.toFixed(2);
  });

const newFormHandler = async (event) => {
  event.preventDefault();

  var reps = document.querySelector('#RepsDone').value;
  var sets = document.querySelector('#SetsDone').value;
  var weight = document.querySelector('#Weight');
  //var exercise = document.querySelector('#Exercise');
  var exercise = 8;
  var calBurned = 0;

  if (reps && sets && exercise ) {
    const response = await fetch(`/api/logs`, {
      method: 'POST',
      body: JSON.stringify({ reps, sets, exercise, calBurned,}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/log');
    } else {
      alert('Failed to create workout');
    }
  }
};

document
  .querySelector('.submit-workout-btn')
  .addEventListener('click', newFormHandler);