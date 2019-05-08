// Global constants 

const EVENTS = {
    CONNECT: {
        NATIVE: 'gamepadconnected',
        ALIAS: 'connect'
    },
    DISCONNECT: {
        NATIVE: 'gamepaddisconnected',
        ALIAS: 'disconnect'
    },
    BUTTON_PRESS: {
        NATIVE: null,
        ALIAS: 'press'
    },
    AXIS_MOVEMENT: {
        NATIVE: null,
        ALIAS: 'move'
    }
};
const BUTTON_PRESS_THRESHOLD = 150;

export { EVENTS, BUTTON_PRESS_THRESHOLD };