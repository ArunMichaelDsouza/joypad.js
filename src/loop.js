// Main loop

import joypad from './joypad';
import { listenToButtonEvents } from './events';

const loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;

        listenToButtonEvents(this.id);
    },
    stop: function (id) {
        window.cancelAnimationFrame(id);
    },
    restart: function (id) {
        this.stop(id);

        setTimeout(() => { this.start(); }, 220);
    }
};

export default loop;