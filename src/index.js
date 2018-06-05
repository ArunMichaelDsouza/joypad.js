// Entry point

import './events';
import Joypad from './Joypad';
import emmitter from './emitter';
import { EVENTS } from './constants';

; (function () {
    window.Joypad = Joypad;
    function main() {
        window.requestAnimationFrame(main);
        if (window.navigator.getGamepads()[0]) {
            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
            if (pressed) {
                emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, pressed);
            }
        }
    }
    main();
})();