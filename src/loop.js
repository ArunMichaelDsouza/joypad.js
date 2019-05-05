// Main loop

import joypad from './joypad';
import { listenToButtonEvents } from './events';
import { loopGamepadInstances } from './helpers';

const loop = {
    id: null,
    updateGamepadStatus: function () {
        loopGamepadInstances((gamepad, index) => {
            joypad.list[index] = gamepad;
        });
    },
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;

        this.updateGamepadStatus();
        listenToButtonEvents(this.id);
    },
    stop: function (id) {
        window.cancelAnimationFrame(id);
    },
    restart: function (id) {
        const { buttonPressThreshold } = joypad.settings;

        this.stop(id);
        setTimeout(() => { this.start(); }, buttonPressThreshold);
    }
};

export default loop;