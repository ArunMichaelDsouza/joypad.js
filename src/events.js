// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';

window.addEventListener(EVENTS.GAMEPAD_CONNECT, function (e) {
    emmitter.publish(EVENTS.GAMEPAD_CONNECT, e);
});

window.addEventListener(EVENTS.GAMEPAD_DISCONNECT, function (e) {
    emmitter.publish(EVENTS.GAMEPAD_DISCONNECT, e);
});