// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements } from './events';
import { loopGamepadInstances } from './helpers';

const loop = {
    id: null,
    updateGamepadInstances: function () {
        loopGamepadInstances((gamepad, index) => {
            return joypad.list[index] = gamepad;
        });
    },
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        joypad.loopStarted = true;

        this.updateGamepadInstances();
        listenToButtonEvents(this.id);
        listenToAxisMovements();
    },
    stop: function (id) {
        return window.cancelAnimationFrame(id);
    },
    restart: function (id) {
        const { buttonPressThreshold } = joypad.settings;

        this.stop(id);
        return setTimeout(() => { this.start(); }, buttonPressThreshold);
    }
};

export default loop;