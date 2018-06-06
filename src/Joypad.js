// Joypad class

import emmitter from './emitter';
import { EVENTS } from './constants';
import loop from './loop';

var Joypad = function () {
    this.on = function (event, cb) {
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
    };
    this.stopLoop = function () {
        loop.cancel(loop.id);
    };
    this.resumeLoop = function () {
        loop.start();
    };
};

export default Joypad;