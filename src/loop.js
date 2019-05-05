// Main loop

// import { listenToButtonEvents } from './events';
import joypad from './joypad';

const loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;
        // listenToButtonEvents(this.id);
    },
    stop: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;