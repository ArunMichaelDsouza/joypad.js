// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements, handleEvent } from './events';
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

        loopGamepadInstances((gamepad, index) => {
            if (!joypad.events.joypad[index]) {
                joypad.events.joypad[index] = {};
            }
        });
        this.updateGamepadInstances();
        listenToButtonEvents(this.id);
        listenToAxisMovements();

        joypad.events.joypad.forEach((gamepad, player) => {
            if (gamepad) {
                Object.keys(gamepad).forEach(key => {
                    handleEvent(key, gamepad, player);
                });
            }
        });
    },
    stop: function (id) {
        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

        return cancelAnimationFrame(id);
    }
};

export default loop;