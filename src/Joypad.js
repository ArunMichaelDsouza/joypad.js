// Joypad instance

import emmitter from './emitter';
import { EVENTS } from './constants';
import loop from './loop';

const joypad = {
    list: {},
    add: function (gamepadInstance) {
        const { index } = gamepadInstance;

        this.list[index] = gamepadInstance;
    },
    remove: function (index) {
        delete this.list[index];
    },
    on: function (event, callback) {
        switch (event) {
            case EVENTS.CONNECT.ALIAS:
                emmitter.subscribe(EVENTS.CONNECT.ALIAS, callback);
                break;
            case EVENTS.DISCONNECT.ALIAS:
                emmitter.subscribe(EVENTS.DISCONNECT.ALIAS, callback);
                break;
            // case EVENTS.OTHER.BUTTON_PRESS:
            //     emmitter.subscribe(EVENTS.OTHER.BUTTON_PRESS, callback);
            //     break;
        }
    },
    vibrate: function (gamepadInstance, options) {
        const { vibrationActuator } = gamepadInstance;

        if (vibrationActuator) {
            const { type } = vibrationActuator;

            gamepadInstance.vibrationActuator.playEffect(type, options);
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