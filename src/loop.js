// Main loop

import emmitter from './emitter';
import { EVENTS } from './constants';

var loop = {
    id: null,
    start: function () {
        var that = this;

        function main() {
            that.id = window.requestAnimationFrame(main);
            if (window.navigator.getGamepads()[0]) {
                var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
                if (pressed) {
                    emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, pressed);
                }
            }
        }
        main();
    },
    cancel: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;