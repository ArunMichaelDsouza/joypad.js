// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';

window.addEventListener(EVENTS.NATIVE.CONNECT, function (e) {
    emmitter.publish(EVENTS.OTHER.CONNECT, e);
});

window.addEventListener(EVENTS.NATIVE.DISCONNECT, function (e) {
    emmitter.publish(EVENTS.OTHER.DISCONNECT, e);
});

window.addEventListener(EVENTS.OTHER.BUTTON_PRESS, function (e) {
    emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, e);
});

var pressEvent = function (eventData) {
    return new CustomEvent(EVENTS.OTHER.BUTTON_PRESS, {
        detail: eventData
    });
};

export function listenToButtonEvents() {
    if ('getGamepads' in window.navigator) {
        var gamepads = window.navigator.getGamepads();

        if (Object.keys(gamepads).length) {
            Object.keys(gamepads).forEach(function (i) {
                var gamepad = gamepads[i];

                if (gamepad) {
                    gamepad.buttons.forEach(function (button, index) {
                        if (button.pressed) {
                            var eventData = {
                                button: button,
                                index: index,
                                gamepad: gamepad
                            };

                            window.dispatchEvent(pressEvent(eventData));
                        }
                    });
                }
            });
        }
    }
};
