// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';

window.addEventListener(EVENTS.NATIVE.CONNECT, function (e) {
    emmitter.publish(EVENTS.OTHER.CONNECT, e);
});

window.addEventListener(EVENTS.NATIVE.DISCONNECT, function (e) {
    emmitter.publish(EVENTS.OTHER.DISCONNECT, e);
});