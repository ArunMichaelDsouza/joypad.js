import emmitter from './emitter';
import './events';

; (function (w) {
    if (w.navigator.getGamepads) {
        console.log(w.navigator.getGamepads());

        function Joypad() {
            this.joypads = [];
        }

        Joypad.prototype.on = function (event, cb) {
            switch (event) {
                case 'connect':
                    emmitter.subscribe('gamepadconnected', cb);
                    break;
                case 'disconnect':
                    emmitter.subscribe('gamepaddisconnected', cb);
                    break;
                case 'gamepadpress':
                    emmitter.subscribe('gamepadpress', cb);
                    break;
            }
        };

        window.main = function () {
            window.requestAnimationFrame(main);
            var pressed = window.navigator.getGamepads()[0].buttons[0].pressed;
            if (pressed) {
                emmitter.publish('gamepadpress', pressed);
            }
        };

        main();

        var joypad = new Joypad();

        joypad.on('connect', function (e) {
            console.log(e.gamepad);
            window.g = e.gamepad;
        });
        joypad.on('disconnect', function (e) {
            console.log(e);
        });
        joypad.on('gamepadpress', function (e) {
            console.log(e);
        });
    }
})(window);