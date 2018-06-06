// Joypad instance

import emmitter from './emitter';
import { EVENTS } from './constants';
import loop from './loop';

var joypad = {
    on: function (event, cb) {
        switch (event) {
            case EVENTS.NATIVE.CONNECT:
                emmitter.subscribe(EVENTS.OTHER.CONNECT, cb);
                break;
            case EVENTS.NATIVE.DISCONNECT:
                emmitter.subscribe(EVENTS.OTHER.DISCONNECT, cb);
                break;
            case EVENTS.OTHER.BUTTON_PRESS:
                emmitter.subscribe(EVENTS.OTHER.BUTTON_PRESS, cb);
                break;
        }
    },
    stop: function () {
        loop.cancel(loop.id);
    },
    start: function () {
        loop.start();
    }.call()
};

export default joypad;