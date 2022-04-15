//Youtube API with video parms
// var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/iframe_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var APIkey = "AIzaSyCqDH_OFdAJjANohMVsxHtoLAW6hEbuyZc";

// var player
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '390',
//     width: '640',
//     playerVars: {autoplay:1, loop:1},
//     videoId: 'IT94xC35u6k',
//     events: {
//       onReady: onPlayerReady,
//       onStateChange: onPlayerStateChange,
//     },
//   });
//   onYouTubeIframeAPIReady();
// }
// function onPlayerReady(event) {
//     event.target.playVideo( {
//         fetch(tag.src + APIkey)
//         .then(response => {
//             if (!response.ok) {
//                 throw response;
//             }
//             return response.json();
//         })
//     )};
// };

//change youtube video embed on button click
// document.getElementById("workout-video-btn").onclick = function() { document.getElementById('player').src = "https://www.youtube.com/embed/UCjNb0nTn10?start=52"};

//change youtube iframe video based on exercise chosen
// const exercise = document.querySelector('#Exercise');
// const exerciseText = exercise[exercise.selectedIndex].innerHTML;

// document.getElementById('workout-video-btn').onclick = function (e) {
//   if (exerciseText === 'Situps') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/UCjNb0nTn10?start=52';
//   } else if (exerciseText === 'Crunches') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/5ER5Of4MOPI?start=4';
//   } else if (exerciseText === 'Pullups') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/9ocmdKcrL4k?start=4';
//   } else if (exerciseText === 'Pushups') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/Pp44Y390Ffs?start=5';
//   } else if (exerciseText === 'Lunges') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/uVwNVEQS_uo?start=5';
//   } else if (exerciseText === 'Running stair incline') {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/Po19MhGbEig?start=8';
//   } else {
//     document.getElementById('player').src =
//       'https://www.youtube.com/embed/vDWv6_rsPx0?start=3';
//   }
// };
