// Main loop

import joypad from './joypad';
import { listenToButtonEvents } from './events';

const loop = {
    id: null,
    updateGamepadStatus: function () {
        const gamepads = window.navigator.getGamepads();

        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(i => {
                const gamepad = gamepads[i];

                if (gamepad) {
                    joypad.list[i] = gamepad;
                }
            });
        }
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