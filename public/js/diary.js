// var logDate = document.querySelector('#date-log');
// var exerciseLog = document.querySelector('#exercise-log');
// var repsLog = document.querySelector('#reps-log');
// var setsLog = document.querySelector('#sets-log');
// var calsLog = document.querySelector('#cals-log');

// function displayNow() {
//     var logNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
//     logDate.textContent = logNow;
//   }


const newFormHandler = async (event) => {
    event.preventDefault();
  
    // const log_date = document.querySelector('#project-name').value
    // const name = document.querySelector('#project-name').value
    // const name = document.querySelector('#project-name').value
    // const name = document.querySelector('#project-name').value
    // const name = document.querySelector('#project-name').value

    if (log_date && reps && sets && weight && calBurned ) {
        const response = await fetch(`/api/diary`, {
          method: 'POST',
          body: JSON.stringify({ log_date, reps, sets, weight, calBurned }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/diary');
        } else {
          alert('Logs not found');
        }
      }
    };
    
    document
      .querySelector('.logs-list')
      .addEventListener('click', newFormHandler);
    
    