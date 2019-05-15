// Joypad events

import emmitter from './emitter';
import joypad from './joypad';
import loop from './loop';
import { EVENTS, STICKS, DIRECTIONS, BUTTON_MAPPING } from './constants';
import { findButtonMapping } from './helpers';

const initEventListeners = () => {
    window.addEventListener(EVENTS.CONNECT.NATIVE, e => {
        emmitter.publish(EVENTS.CONNECT.ALIAS, e);

        // Start loop on gamepad connection if not already started
        if (!joypad.loopStarted) {
            joypad.loopStarted = true;
            return loop.start();
        }
    });
    window.addEventListener(EVENTS.DISCONNECT.NATIVE, e => {
        emmitter.publish(EVENTS.DISCONNECT.ALIAS, e);

        // Remove instance and reset events on gamepad disconnection
        joypad.remove(e.gamepad.index);
        joypad.buttonEvents.joypad[e.gamepad.index] = null;

        // Stop loop if all gamepads have been disconnected
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
const listenToButtonEvents = gamepad => {
    gamepad.buttons.forEach((button, index) => {
        const keys = findButtonMapping(index, BUTTON_MAPPING);
        const { buttonEvents } = joypad;

        if (keys && keys.length) {
            keys.forEach(key => {

                // If button is pressed then set press status of button
                if (button.pressed) {
                    if (!buttonEvents.joypad[gamepad.index][key]) {
                        buttonEvents.joypad[gamepad.index][key] = {
                            pressed: true,
                            hold: false,
                            released: false
                        };
                    }

                    // Set button event data
                    buttonEvents.joypad[gamepad.index][key].button = button;
                    buttonEvents.joypad[gamepad.index][key].index = index;
                    buttonEvents.joypad[gamepad.index][key].gamepad = gamepad;
                }

                // If button is not pressed then set release status of button
                else if (!button.pressed && buttonEvents.joypad[gamepad.index][key]) {
                    buttonEvents.joypad[gamepad.index][key].released = true;
                    buttonEvents.joypad[gamepad.index][key].hold = false;
                }
            });
        }
    });
};
const listenToAxisMovements = gamepad => {
    const axisMovementEvent = eventData => new CustomEvent(EVENTS.AXIS_MOVEMENT.ALIAS, { detail: eventData });
    const { axisMovementThreshold } = joypad.settings;
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
};
const handleButtonEvent = (buttonName, buttonEvents) => {
    // Fire button press event
    if (buttonEvents[buttonName].pressed) {
        const buttonPressEvent = eventData => new CustomEvent(EVENTS.BUTTON_PRESS.ALIAS, { detail: eventData });
        const { index, gamepad } = buttonEvents[buttonName];
        const eventData = {
            buttonName,
            button: buttonEvents[buttonName].button,
            index,
            gamepad
        };
        window.dispatchEvent(buttonPressEvent(eventData));

        // Reset button usage flags
        buttonEvents[buttonName].pressed = false;
        buttonEvents[buttonName].hold = true;
    }

    // Button being held
    else if (buttonEvents[buttonName].hold) { }

    // Button being released
    else if (buttonEvents[buttonName].released) {
        delete buttonEvents[buttonName];
    }
};

initEventListeners();
export { listenToButtonEvents, listenToAxisMovements, handleButtonEvent }
