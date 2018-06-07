// Main loop

import emmitter from './emitter';
import { EVENTS } from './constants';
import { listenToButtonEvents } from './events';

var loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        listenToButtonEvents();
        // if (window.navigator.getGamepads()[0]) {
        //     var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
        //     //console.log(window.navigator.getGamepads()[0].buttons[0]);
        //     if (pressed) {
        //         emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, pressed);
        //     }
        // }
        //console.log(navigator.getGamepads());
    },
    cancel: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;