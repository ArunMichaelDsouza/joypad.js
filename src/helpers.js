// Helper functions

import { VENDOR_PREFIXES } from './constants';

const loopGamepadInstances = callback => {
    const gamepads = window.navigator.getGamepads();

    if (Object.keys(gamepads).length) {
        Object.keys(gamepads).forEach(index => {
            const gamepad = gamepads[index];

            if (gamepad) {
                return callback(gamepad, index);
            }
        });
    }
};
const log = message => {
    if (console.warn && typeof console.warn === 'function') {
        console.warn(message);
    } else {
        console.log(message);
    }
};
const requestAnimationFrame = () => {
    let requestAnimationFrame = null;

    VENDOR_PREFIXES.forEach(function (key) {
        requestAnimationFrame = requestAnimationFrame || window.requestAnimationFrame || window[key + 'RequestAnimationFrame'];
    });
};
const cancelAnimationFrame = () => {
    let cancelAnimationFrame = null;

    VENDOR_PREFIXES.forEach(function (key) {
        cancelAnimationFrame = cancelAnimationFrame || window.cancelAnimationFrame || window[key + 'CancelAnimationFrame'];
    });
}

export { loopGamepadInstances, log, requestAnimationFrame, cancelAnimationFrame };