// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements, handleButtonEvent } from './events';

const loop = {
    id: null,
    start: function () {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        const gamepads = window.navigator.getGamepads();
        const { buttonEvents } = joypad;

        // Loop all the gamepads on each frame
        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(index => {
                const gamepad = gamepads[index];

                if (gamepad) {
                    // Initialise joypad instance events if not present
                    if (!buttonEvents.joypad[index]) {
                        buttonEvents.joypad[index] = {};
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

        // Handle button events on each frame
        buttonEvents.joypad.forEach(events => {
            if (events) {
                Object.keys(events).forEach(key => {
                    handleButtonEvent(key, events);
                });
            }
        });

        // Set loop start flag and recursively call the start function on each frame
        this.id = requestAnimationFrame(this.start.bind(this));
    },
    stop: function (id) {
        const cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;

        return cancelAnimationFrame(id);
    }
};

export default loop;