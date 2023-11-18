const video = document.getElementById("vsl");
const muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.classList.remove("unmute");
        muteButton.classList.add("mute");
        muteButton.querySelector("img").src = "./img/sound.png"; // Altera a imagem para sound.png
    } else {
        video.muted = true;
        muteButton.classList.remove("mute");
        muteButton.classList.add("unmute");
        muteButton.querySelector("img").src = "./img/mute.png"; // Altera a imagem para mute.png
    }
});