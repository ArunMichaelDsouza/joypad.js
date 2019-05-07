// Joypad events

import emmitter from './emitter';
import joypad from './joypad';
import loop from './loop';
import { EVENTS } from './constants';
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
            loop.stop(loop.id);
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

initEventListeners();
export { listenToButtonEvents }
