import Player from '@vimeo/player';
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const playbackTime = function(currentSecond) {
        let time = 0;
        time = currentSecond.seconds
        localStorage.setItem("videoplayer-current-time", JSON.stringify(time))
    }

    player.on('timeupdate', throttle(playbackTime, 1000));

    const currentTime = localStorage.getItem("videoplayer-current-time")
    
    player.setCurrentTime(JSON.parse(currentTime))

