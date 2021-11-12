document.addEventListener("keydown", function (e) {
    const audios = document.querySelectorAll("audio");

    for (let number = 0; number < audios.length; number++) {

        if (e.keyCode == audios[number].dataset.key) {
            let myAudio = new Audio(audios[number].src);
            myAudio.play();
        }
    }

    const keys = document.querySelectorAll(".key");

    for (let i = 0; i < keys.length; i++) {

        if (e.keyCode == keys[i].dataset.key) {
            keys[i].classList.add("playing");

            keys[i].classList.add("drop");

            setTimeout(timeFunction, 100);
        }

        function timeFunction() {
            keys[i].classList.remove("playing");
        }
    }
});