var logDate = document.querySelector('#date-log');
var exerciseLog = document.querySelector('#exercise-log');
var repsLog = document.querySelector('#reps-log');
var setsLog = document.querySelector('#sets-log');
var calsLog = document.querySelector('#cals-log');

function displayNow() {
    var logNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    logDate.textContent = logNow;
  }