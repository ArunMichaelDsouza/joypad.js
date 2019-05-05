// Joypad instance

import emmitter from './emitter';
import { EVENTS } from './constants';

const joypad = {
    loopStarted: false,
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

        if (vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function') {
            const { type } = vibrationActuator;

            gamepadInstance.vibrationActuator.playEffect(type, options);
        }
    }
};

export default joypad;