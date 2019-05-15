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
const KEY_MAPPING = {
    'button_1': 0,
    'button_2': 1,
    'button_3': 2,
    'button_4': 3,
    'shoulder_left_1': 4,
    'shoulder_right_1': 5,
    'shoulder_left_2': 6,
    'shoulder_right_2': 7,
    'select': 8,
    'start': 9,
    'left_stick': 10,
    'right_right': 11,
    'd_pad_up': 12,
    'd_pad_down': 13,
    'd_pad_left': 14,
    'd_pad_right': 15,
    'vendor': 16,
    'vendor': 17
};

export { EVENTS, AXIS_MOVEMENT_THRESHOLD, STICKS, DIRECTIONS, KEY_MAPPING };