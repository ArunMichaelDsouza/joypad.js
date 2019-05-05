// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';
import joypad from './joypad';
import loop from './loop';

window.addEventListener(EVENTS.CONNECT.NATIVE, e => {
    emmitter.publish(EVENTS.CONNECT.ALIAS, e);
    if (!joypad.loopStarted) {
        loop.start();
    }
    joypad.add(e.gamepad);
});

window.addEventListener(EVENTS.DISCONNECT.NATIVE, e => {
    emmitter.publish(EVENTS.DISCONNECT.ALIAS, e);
    joypad.remove(e.gamepad.index);
});

window.addEventListener(EVENTS.BUTTON_PRESS.ALIAS, e => {
    emmitter.publish(EVENTS.BUTTON_PRESS.ALIAS, e);
});

const listenToButtonEvents = id => {
    const pressEvent = eventData => new CustomEvent(EVENTS.BUTTON_PRESS.ALIAS, { detail: eventData });

    if ('getGamepads' in window.navigator) {
        const gamepads = window.navigator.getGamepads();

        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(i => {
                const gamepad = gamepads[i];

                if (gamepad) {
                    gamepad.buttons.forEach((button, index) => {
                        if (button.pressed) {
                            const eventData = { button, index, gamepad };

                            window.dispatchEvent(pressEvent(eventData));
                            loop.restart(id);
                        }
                    });
                }
            });
        }
    }
};

export { listenToButtonEvents }
