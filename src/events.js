// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';

window.addEventListener(EVENTS.NATIVE.CONNECT, e => {
    emmitter.publish(EVENTS.OTHER.CONNECT, e);
});

window.addEventListener(EVENTS.NATIVE.DISCONNECT, e => {
    emmitter.publish(EVENTS.OTHER.DISCONNECT, e);
});

window.addEventListener(EVENTS.OTHER.BUTTON_PRESS, e => {
    emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, e);
});

const pressEvent = eventData => new CustomEvent(EVENTS.OTHER.BUTTON_PRESS, { detail: eventData });

export function listenToButtonEvents() {
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
                        }
                    });
                }
            });
        }
    }
};
