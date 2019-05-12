// Joypad events

import emmitter from './emitter';
import joypad from './joypad';
import loop from './loop';
import { EVENTS, AXIS_MOVEMENT_THRESHOLD, STICKS, DIRECTIONS } from './constants';
import { loopGamepadInstances } from './helpers';

const initEventListeners = () => {
    window.addEventListener(EVENTS.CONNECT.NATIVE, e => {
        emmitter.publish(EVENTS.CONNECT.ALIAS, e);
        if (!joypad.loopStarted) {
            return loop.start();
        }
    });
    window.addEventListener(EVENTS.DISCONNECT.NATIVE, e => {
        emmitter.publish(EVENTS.DISCONNECT.ALIAS, e);
        joypad.remove(e.gamepad.index);
        if (!Object.keys(joypad.list).length) {
            joypad.loopStarted = false;
            return loop.stop(loop.id);
        }
    });
    window.addEventListener(EVENTS.BUTTON_PRESS.ALIAS, e => {
        return emmitter.publish(EVENTS.BUTTON_PRESS.ALIAS, e);
    });
};
const listenToButtonEvents = id => {
    const buttonPressEvent = eventData => new CustomEvent(EVENTS.BUTTON_PRESS.ALIAS, { detail: eventData });

    return loopGamepadInstances(gamepad => {
        gamepad.buttons.forEach((button, index) => {
            if (button.pressed) {
                const eventData = { button, index, gamepad };

                window.dispatchEvent(buttonPressEvent(eventData));
                return loop.restart(id);
            }
        });
    });
};
const listenToAxisMovements = () => {
    const axisMovementEvent = eventData => new CustomEvent(EVENTS.AXIS_MOVEMENT.ALIAS, { detail: eventData });

    return loopGamepadInstances(gamepad => {
        const { axes } = gamepad;
        const totalAxisIndexes = axes.length;
        const totalAxes = totalAxisIndexes / 2;

        axes.forEach((axis, index) => {
            if (Math.abs(axis) > AXIS_MOVEMENT_THRESHOLD) {
                let axisMoved = null; // Stick which is moved (left, right)
                let direction = null; // Direction of movement (top, bottom, left, right)
                let axisMovementValue = axis;

                if (index < totalAxes) {
                    axisMoved = STICKS.LEFT.NAME;
                } else {
                    axisMoved = STICKS.RIGHT.NAME;
                }

                if (index === STICKS.LEFT.AXES.X || index === STICKS.RIGHT.AXES.X) {
                    direction = axis < 0 ? DIRECTIONS.LEFT : DIRECTIONS.RIGHT;
                }
                if (index === STICKS.LEFT.AXES.Y || index === STICKS.RIGHT.AXES.Y) {
                    direction = axis < 0 ? DIRECTIONS.TOP : DIRECTIONS.BOTTOM;
                }

                // Total joysticks, joystick moved, direction of movement, movement value
            }
        });
    });
};

initEventListeners();
export { listenToButtonEvents, listenToAxisMovements }
