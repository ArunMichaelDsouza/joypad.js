// Main loop

import emmitter from './emitter';
import { EVENTS } from './constants';

var loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        if (window.navigator.getGamepads()[0]) {
            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
            if (pressed) {
                emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, pressed);
            }
        }
    },
    cancel: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;