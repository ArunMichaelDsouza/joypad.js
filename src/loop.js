// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements } from './events';
import { loopGamepadInstances } from './helpers';

const loop = {
    id: null,
    updateGamepadInstances: function () {
        loopGamepadInstances((gamepad, index) => {
            return joypad.instances[index] = gamepad;
        });
    },
    start: function () {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        this.id = requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;

        this.updateGamepadInstances();
        listenToButtonEvents(this.id);
        listenToAxisMovements();
    },
    stop: function (id) {
        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

        return cancelAnimationFrame(id);
    },
    restart: function (id) {
        const { buttonPressThreshold } = joypad.settings;

        this.stop(id);
        return setTimeout(() => { this.start(); }, buttonPressThreshold);
    }
};

export default loop;