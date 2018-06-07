// Joypad instance

import emmitter from './emitter';
import { EVENTS } from './constants';
import loop from './loop';

const joypad = {
    on: function (event, callback) {
        switch (event) {
            case EVENTS.NATIVE.CONNECT:
                emmitter.subscribe(EVENTS.OTHER.CONNECT, callback);
                break;
            case EVENTS.NATIVE.DISCONNECT:
                emmitter.subscribe(EVENTS.OTHER.DISCONNECT, callback);
                break;
            case EVENTS.OTHER.BUTTON_PRESS:
                emmitter.subscribe(EVENTS.OTHER.BUTTON_PRESS, callback);
                break;
        }
    },
    stop: function () {
        loop.stop(loop.id);
    },
    start: function () {
        loop.start();
    }.call()
};

export default joypad;