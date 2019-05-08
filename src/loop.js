// Main loop

import joypad from './joypad';
import { listenToButtonEvents } from './events';
import { loopGamepadInstances, requestAnimationFrame, cancelAnimationFrame } from './helpers';

const loop = {
    id: null,
    updateGamepadInstances: function () {
        loopGamepadInstances((gamepad, index) => {
            return joypad.list[index] = gamepad;
        });
    },
    start: function () {
        this.id = requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;

        this.updateGamepadInstances();
        listenToButtonEvents(this.id);
    },
    stop: function (id) {
        return cancelAnimationFrame(id);
    },
    restart: function (id) {
        const { buttonPressThreshold } = joypad.settings;

        this.stop(id);
        return setTimeout(() => { this.start(); }, buttonPressThreshold);
    }
};

export default loop;