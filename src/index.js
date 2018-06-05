import emmitter from './emitter';
import { EVENTS } from './constants';
import './events';

class Joypad {
    constructor() {
        this.main = this.main.bind(this);
        this.main();
    }

    main() {
        window.requestAnimationFrame(this.main);
        if (window.navigator.getGamepads()[0]) {
            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
            if (pressed) {
                emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, pressed);
            }
        }
    }

    on(event, cb) {
        switch (event) {
            case EVENTS.NATIVE.CONNECT:
                emmitter.subscribe(EVENTS.OTHER.CONNECT, cb);
                break;
            case EVENTS.NATIVE.DISCONNECT:
                emmitter.subscribe(EVENTS.OTHER.DISCONNECT, cb);
                break;
            case EVENTS.OTHER.BUTTON_PRESS:
                emmitter.subscribe(EVENTS.OTHER.BUTTON_PRESS, cb);
                break;
        }
    }

    destroy() {

    }
}

window.Joypad = Joypad;