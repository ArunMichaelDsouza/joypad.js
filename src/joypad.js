// Joypad instance

import emmitter from './emitter';
import { EVENTS, BUTTON_PRESS_THRESHOLD } from './constants';

const joypad = {
    loopStarted: false,
    list: {},
    settings: {
        buttonPressThreshold: BUTTON_PRESS_THRESHOLD
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
            case EVENTS.BUTTON_PRESS.ALIAS:
                emmitter.subscribe(EVENTS.BUTTON_PRESS.ALIAS, callback);
                break;
        }
    },
    vibrate: function (gamepadInstance, options) {
        const { vibrationActuator } = gamepadInstance;

        if (vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function') {
            const { type } = vibrationActuator;

            gamepadInstance.vibrationActuator.playEffect(type, options);
        }
    },
    set: function (settings) {
        const { buttonPressThreshold } = settings;

        this.settings.buttonPressThreshold = buttonPressThreshold;
    }
};

export default joypad;
