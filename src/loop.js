// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements, handleEvent } from './events';

const loop = {
    id: null,
    start: function () {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        const gamepads = window.navigator.getGamepads();

        // Loop all the gamepads on each frame
        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(index => {
                const gamepad = gamepads[index];

                if (gamepad) {
                    // Initialise joypad instance events if not present
                    if (!joypad.events.joypad[index]) {
                        joypad.events.joypad[index] = {};
                    }

                    // Update gamepad instance data
                    joypad.instances[index] = gamepad;

                    // Listen to button press events
                    listenToButtonEvents(gamepad);

                    // Listen to axis movement events
                    listenToAxisMovements(gamepad);
                }
            });
        }

        // Set loop start flag and recursively call the start function on each frame
        joypad.loopStarted = true;
        this.id = requestAnimationFrame(this.start.bind(this));


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