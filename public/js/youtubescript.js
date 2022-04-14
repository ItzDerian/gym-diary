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
