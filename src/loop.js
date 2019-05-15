// Main loop

import joypad from './joypad';
import { listenToButtonEvents, listenToAxisMovements, handleEvent } from './events';

const loop = {
    id: null,
    start: function () {
        const requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
        const gamepads = window.navigator.getGamepads();

        //
        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(index => {
                const gamepad = gamepads[index];

                if (gamepad) {
                    //
                    if (!joypad.events.joypad[index]) {
                        joypad.events.joypad[index] = {};
                    }

                    //
                    joypad.instances[index] = gamepad;

                    //
                    listenToButtonEvents(gamepad);

                    //
                    listenToAxisMovements(gamepad);
                }
            });
        }

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