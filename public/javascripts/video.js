function videoEvents() {
    const video = document.querySelector('#vision-video');
    const playBtn = document.querySelector('#play-video-btn');

    async function playVideo() {
        if (video.paused) {
            await video.play();
            playBtn.classList.add("playing");
            playBtn.innerHTML = "Pause Video";
        } else {
            video.pause();
            playBtn.classList.remove("playing");
            playBtn.innerHTML = "Watch Video";
        };
    };

    playBtn.addEventListener('click', playVideo);
    video.addEventListener('click', playVideo);
}

videoEvents()

