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
        ALIAS: 'button_press'
    },
    AXIS_MOVEMENT: {
        NATIVE: null,
        ALIAS: 'axis_move'
    }
};
const BUTTON_PRESS_THRESHOLD = 150;
const AXIS_MOVEMENT_THRESHOLD = 0.8;
const STICKS = {
    LEFT: {
        NAME: 'left_stick',
        AXES: {
            X: 0,
            Y: 1
        }
    },
    RIGHT: {
        NAME: 'right_stick',
        AXES: {
            X: 2,
            Y: 3
        }
    }
};
const DIRECTIONS = {
    LEFT: 'left',
    RIGHT: 'right',
    TOP: 'top',
    BOTTOM: 'bottom'
};

export { EVENTS, BUTTON_PRESS_THRESHOLD, AXIS_MOVEMENT_THRESHOLD, STICKS, DIRECTIONS };