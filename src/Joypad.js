// Joypad instance

import emmitter from './emitter';
import { EVENTS } from './constants';
import loop from './loop';

const joypad = {
    list: {},
    append: function (gamepadInstance) {
        const { displayId } = gamepadInstance;

        this.list[displayId] = gamepadInstance;
    },
    on: function (event, callback) {
        switch (event) {
            case EVENTS.CONNECT.NATIVE:
                emmitter.subscribe(EVENTS.CONNECT.ALIAS, callback);
                break;
            case EVENTS.DISCONNECT.NATIVE:
                emmitter.subscribe(EVENTS.DISCONNECT.ALIAS, callback);
                break;
            // case EVENTS.OTHER.BUTTON_PRESS:
            //     emmitter.subscribe(EVENTS.OTHER.BUTTON_PRESS, callback);
            //     break;
        }
    },
    // stop: function () {
    //     loop.stop(loop.id);
    // },
    // start: function () {
    //     loop.start();
    // }.call()
};

export default joypad;