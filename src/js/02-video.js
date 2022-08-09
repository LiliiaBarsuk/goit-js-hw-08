import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playbackTime = function(currentSecond) {
        const time = currentSecond.seconds
        localStorage.setItem("videoplayer-current-time", JSON.stringify(time))
    }

    player.on('timeupdate', throttle(playbackTime, 1000));

    const currentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"))
    
    if (currentTime) {
    player.setCurrentTime(currentTime)
}
