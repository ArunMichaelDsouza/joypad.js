// Joypad events

import emmitter from './emitter';
import joypad from './joypad';
import loop from './loop';
import { EVENTS, STICKS, DIRECTIONS, KEY_MAPPING } from './constants';
import { loopGamepadInstances, findKeyMapping } from './helpers';

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
        if (!Object.keys(joypad.instances).length) {
            joypad.loopStarted = false;
            return loop.stop(loop.id);
        }
    });
    window.addEventListener(EVENTS.BUTTON_PRESS.ALIAS, e => {
        return emmitter.publish(EVENTS.BUTTON_PRESS.ALIAS, e);
    });
    window.addEventListener(EVENTS.AXIS_MOVEMENT.ALIAS, e => {
        return emmitter.publish(EVENTS.AXIS_MOVEMENT.ALIAS, e);
    });
};
const handleEvent = (key, events, player) => {
    if (events[key].pressed) {
        console.log('press');
        // this.trigger('press', key, events[key].value, player);
        events[key].pressed = false;
        events[key].hold = true;
    } else if (events[key].hold) {
        // this.trigger('hold', key, events[key].value, player);
    } else if (events[key].released) {
        // this.trigger('release', key, events[key].value, player);
        delete events[key];
    }
};
const listenToButtonEvents = id => {
    const buttonPressEvent = eventData => new CustomEvent(EVENTS.BUTTON_PRESS.ALIAS, { detail: eventData });

    return loopGamepadInstances(gamepad => {
        gamepad.buttons.forEach((button, index) => {
            const keys = findKeyMapping(index, KEY_MAPPING);

            if (keys) {
                keys.forEach(key => {
                    if (button.pressed) {
                        if (!joypad.events.joypad[gamepad.index][key]) {
                            joypad.events.joypad[gamepad.index][key] = {
                                pressed: true,
                                hold: false,
                                released: false,
                                player: gamepad.index
                            };
                        }
                        joypad.events.joypad[gamepad.index][key].value = button.value;
                    } else if (!button.pressed && joypad.events.joypad[gamepad.index][key]) {
                        joypad.events.joypad[gamepad.index][key].released = true;
                        joypad.events.joypad[gamepad.index][key].hold = false;
                    }
                });
            }

            // if (button.pressed) {
            //     const eventData = { button, index, gamepad };

            //     window.dispatchEvent(buttonPressEvent(eventData));
            //     return loop.restart(id);
            // }
        });
    });
};
const listenToAxisMovements = () => {
    const axisMovementEvent = eventData => new CustomEvent(EVENTS.AXIS_MOVEMENT.ALIAS, { detail: eventData });
    const { axisMovementThreshold } = joypad.settings;

    return loopGamepadInstances(gamepad => {
        const { axes } = gamepad;
        const totalAxisIndexes = axes.length;
        const totalSticks = totalAxisIndexes / 2;

        axes.forEach((axis, index) => {
            if (Math.abs(axis) > axisMovementThreshold) {
                let stickMoved = null;
                let directionOfMovement = null;
                let axisMovementValue = axis;

                if (index < totalSticks) {
                    stickMoved = STICKS.LEFT.NAME;
                } else {
                    stickMoved = STICKS.RIGHT.NAME;
                }

                if (index === STICKS.LEFT.AXES.X || index === STICKS.RIGHT.AXES.X) {
                    directionOfMovement = axis < 0 ? DIRECTIONS.LEFT : DIRECTIONS.RIGHT;
                }
                if (index === STICKS.LEFT.AXES.Y || index === STICKS.RIGHT.AXES.Y) {
                    directionOfMovement = axis < 0 ? DIRECTIONS.TOP : DIRECTIONS.BOTTOM;
                }

                const eventData = { gamepad, totalSticks, stickMoved, directionOfMovement, axisMovementValue };
                return window.dispatchEvent(axisMovementEvent(eventData));
            }
        });
    });
};

initEventListeners();
export { listenToButtonEvents, listenToAxisMovements, handleEvent }
