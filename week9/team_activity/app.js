// document.addEventListener("keydown", function (e) {
//     if (e.keyCode == '65') {
//         let myAudio = new Audio("sounds/boom.wav");
//         myAudio.play();
//         let a = 
//     } 
//     else if (e.keyCode == '83') {
//         let myAudio = new Audio("sounds/hihat.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '68') {
//         let myAudio = new Audio("sounds/kick.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '70') {
//         let myAudio = new Audio("sounds/openhat.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '71') {
//         let myAudio = new Audio("sounds/boom.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '72') {
//         let myAudio = new Audio("sounds/ride.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '74') {
//         let myAudio = new Audio("sounds/snare.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '75') {
//         let myAudio = new Audio("sounds/tom.wav");
//         myAudio.play();
//     }
//     else if (e.keyCode == '76') {
//         let myAudio = new Audio("sounds/tink.wav");
//         myAudio.play();
//     }
// });

document.addEventListener("keydown", function (e) {
    const audios = document.querySelectorAll("audio");
    for (let number = 0; number < audios.length; number++) {
        console.log(audios[number].dataset.key);
        if (e.keyCode == audios[number].dataset.key) {
            var myAudio = new Audio(audios[number].src);
            myAudio.play();
        }
    }
});