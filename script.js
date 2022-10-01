const allAudio = document.querySelectorAll("audio");

window.addEventListener("keydown", event => {
    allAudio.forEach(audio => {
        if (audio.classList.contains(event.key)) {
            audio.currentTime = 0;
            audio.play();
        }
    })
})