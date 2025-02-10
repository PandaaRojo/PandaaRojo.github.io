document.getElementById("mirror").addEventListener("click", function () {
    let mirrorContent = document.getElementById("mirror-content");
    let currentGif = mirrorContent.style.backgroundImage;

    let gif1 = "url(https://media0.giphy.com/media/x28cIQSn19Tbi/giphy.gif)";
    let gif2 = "url(https://media2.giphy.com/media/aXNjCb6cXtL8c/giphy.gif)";

    if (currentGif.includes("x28cIQSn19Tbi")) {
        mirrorContent.style.backgroundImage = gif2;
        mirrorContent.style.backgroundPosition = "center"; // Mueve el GIF a la derecha
    } else {
        mirrorContent.style.backgroundImage = gif1;
        mirrorContent.style.backgroundPosition = "center"; // Lo regresa al centro
    }
});