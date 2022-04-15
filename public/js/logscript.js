//logentry.handlebars
// console.log("hello");
//CALORIES BURNED PER MINUTE
//1LB=.453592KG
//(MET * BODY WEIGHT(KG) * 3.5)/200

//FUNCTION FOR EXERCISE OPTIONS
//const userExerciseEL = document.querySelector('#Exercise');
//const userBWEL = document.querySelector('#Weight');
//const reps = document.querySelector('#RepsDone');
//const sets = document.querySelector('#SetsDone');
//const calBurnedEL = document.querySelector('#calBurned');

// document
//   .querySelector('.submit-workout-btn')
//   .addEventListener('click', function (e) {
//     const exercise = exercise.value;
//     const userBW = weight.value;
//     console.log(userExercise);
//     const calBurned = 0;

//     if (exercise === 'Situps') {
//       calBurned = (2.65 * userBW * 3.5) / 200;
//     } else if (exercise === 'Crunches') {
//       calBurned = (2.65 * userBW * 3.5) / 200;
//     } else if (exercise === 'Pullups') {
//       calBurned = (3.1 * userBW * 3.5) / 200;
//     } else if (exercise === 'Pushups') {
//       calBurned = (3.3 * userBW * 3.5) / 200;
//     } else if (exercise === 'Lunges') {
//       calBurned = (4.1 * userBW * 3.5) / 200;
//     } else if (exercise === 'Running stair incline') {
//       calBurned = (15 * userBW * 3.5) / 200;
//     } else {
//       calBurned = (12.3 * userBW * 3.5) / 200;
//     }
//     //calBurnedEL.innerHTML = calBurned.toFixed(2);
//   });

const newFormHandler = async (event) => {
  event.preventDefault();

  const reps = document.querySelector('#RepsDone').value;
  const sets = document.querySelector('#SetsDone').value;
  const weight = document.querySelector('#Weight').value;

  const selectExercise = document.querySelector('#Exercise');
  const exercise_id = selectExercise.value;

  const exercise = selectExercise[selectExercise.selectedIndex].innerHTML;

  const userBW = weight;
  // console.log(userExercise);
  let calBurned;

  if (exercise === 'Situps') {
    calBurned = (2.65 * userBW * 3.5) / 200;
    // exercise_id = 5;
  } else if (exercise === 'Crunches') {
    calBurned = (2.65 * userBW * 3.5) / 200;
    // exercise_id = 3;
  } else if (exercise === 'Pullups') {
    calBurned = (3.1 * userBW * 3.5) / 200;
    // exercise_id = 4;
  } else if (exercise === 'Pushups') {
    calBurned = (3.3 * userBW * 3.5) / 200;
    exercise_id = 1;
  } else if (exercise === 'Lunges') {
    calBurned = (4.1 * userBW * 3.5) / 200;
    // exercise_id = 17;
  } else if (exercise === 'Running stair incline') {
    calBurned = (15 * userBW * 3.5) / 200;
    // exercise_id = 11;
  } else {
    calBurned = (12.3 * userBW * 3.5) / 200;
    // exercise_id = 24;
  }

  console.log(exercise_id, exercise, calBurned);

  if (reps && sets && exercise) {
    const response = await fetch(`/api/logs`, {
      method: 'POST',
      body: JSON.stringify({ reps, sets, exercise_id, weight, calBurned }),
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
