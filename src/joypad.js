// Joypad instance

import emitter from './emitter';
import { EVENTS, AXIS_MOVEMENT_THRESHOLD } from './constants';
import { log, hasVibrationSupport } from './helpers';

const joypad = {
    loopStarted: false,
    instances: {},
    buttonEvents: {
        joypad: []
    },
    settings: {
        axisMovementThreshold: AXIS_MOVEMENT_THRESHOLD
    },
    remove: function (index) {
        return delete this.instances[index];
    },
    on: function (event, callback) {
        switch (event) {
            case EVENTS.CONNECT.ALIAS:
                emitter.subscribe(EVENTS.CONNECT.ALIAS, callback);
                break;
            case EVENTS.DISCONNECT.ALIAS:
                emitter.subscribe(EVENTS.DISCONNECT.ALIAS, callback);
                break;
            case EVENTS.BUTTON_PRESS.ALIAS:
                emitter.subscribe(EVENTS.BUTTON_PRESS.ALIAS, callback);
                break;
            case EVENTS.AXIS_MOVEMENT.ALIAS:
                emitter.subscribe(EVENTS.AXIS_MOVEMENT.ALIAS, callback);
                break;
        }
    },
    vibrate: function (gamepadInstance, options) {
        const { vibrationActuator } = gamepadInstance;
        const vibrationSettings = options ? options : this.settings.vibration;

        if (hasVibrationSupport(vibrationActuator)) {
            const { type } = vibrationActuator;

            return gamepadInstance.vibrationActuator.playEffect(type, vibrationSettings);
        } else {
            log('No vibration actuator interface found - https://developer.mozilla.org/en-US/docs/Web/API/GamepadHapticActuator');
        }
    },
    set: function (settings) {
        const { axisMovementThreshold, vibration } = settings;
        const parsedValue = parseFloat(axisMovementThreshold);

        this.settings.vibration = vibration;
        if (!isNaN(parsedValue)) {
            this.settings.axisMovementThreshold = parsedValue;
        }
    }
};

export default joypad;
