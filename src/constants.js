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
    BUTTON_RELEASE: {
        NATIVE: null,
        ALIAS: 'button_release'
    },
    AXIS_MOVEMENT: {
        NATIVE: null,
        ALIAS: 'axis_move'
    }
};
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
const BUTTON_MAPPING = {
    'button_0': 0,
    'button_1': 1,
    'button_2': 2,
    'button_3': 3,
    'button_4': 4,
    'button_5': 5,
    'button_6': 6,
    'button_7': 7,
    'button_8': 8,
    'button_9': 9,
    'button_10': 10,
    'button_11': 11,
    'button_12': 12,
    'button_13': 13,
    'button_14': 14,
    'button_15': 15,
    'button_16': 16,
    'button_17': 17
};
const AXIS_MOVEMENT_THRESHOLD = 0.8;

export { EVENTS, STICKS, DIRECTIONS, BUTTON_MAPPING, AXIS_MOVEMENT_THRESHOLD };