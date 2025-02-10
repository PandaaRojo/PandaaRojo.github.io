document.getElementById("mirror").addEventListener("click", function () {
    let audio = document.getElementById("click-sound");
    if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Reinicia el audio al inicio
    } else {
        audio.play();
    }
});

document.getElementById("play-pause").addEventListener("click", function () {
    let audio = document.getElementById("click-sound");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

document.getElementById("volume-up").addEventListener("click", function () {
    let audio = document.getElementById("click-sound");
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
});

document.getElementById("volume-down").addEventListener("click", function () {
    let audio = document.getElementById("click-sound");
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
});