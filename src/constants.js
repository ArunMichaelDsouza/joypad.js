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
    }
};
const BUTTON_PRESS_THRESHOLD = 150;
const VENDOR_PREFIXES = ['webkit', 'moz'];

export { EVENTS, BUTTON_PRESS_THRESHOLD, VENDOR_PREFIXES };