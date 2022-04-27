// Joypad library

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
                return emitter.subscribe(EVENTS.CONNECT.ALIAS, callback);
            case EVENTS.DISCONNECT.ALIAS:
                return emitter.subscribe(EVENTS.DISCONNECT.ALIAS, callback);
            case EVENTS.BUTTON_PRESS.ALIAS:
                return emitter.subscribe(EVENTS.BUTTON_PRESS.ALIAS, callback);
            case EVENTS.BUTTON_RELEASE.ALIAS:
                return emitter.subscribe(EVENTS.BUTTON_RELEASE.ALIAS, callback);
            case EVENTS.AXIS_MOVEMENT.ALIAS:
                return emitter.subscribe(EVENTS.AXIS_MOVEMENT.ALIAS, callback);
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
        const { axisMovementThreshold, vibration, customButtonMapping } = settings;
        const parsedValue = parseFloat(axisMovementThreshold);

        if (!isNaN(parsedValue)) {
            this.settings.axisMovementThreshold = parsedValue;
        }
        this.settings.vibration = vibration;
        this.settings.customButtonMapping = customButtonMapping;
    },
    trigger: function (event, data) {
        return emitter.publish(event, data);
    }
};

export default joypad;
