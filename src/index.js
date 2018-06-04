; (function (w) {
    if (w.navigator.getGamepads) {
        console.log(w.navigator.getGamepads());

        w.addEventListener('gamepadconnected', function (e) {
            emmitter.publish('gamepadconnected', e);
        });

        w.addEventListener('gamepaddisconnected', function (e) {
            emmitter.publish('gamepaddisconnected', e);
        });

        var emmitter = {
            events: {},
            publish: function (event, data) {
                if (this.events.hasOwnProperty(event)) {
                    this.events[event].forEach(function (listener) {
                        listener(data);
                    });
                }
            },
            subscribe: function (event, listener) {
                if (!this.events.hasOwnProperty(event)) {
                    this.events[event] = [];
                }
                this.events[event].push(listener);

                return {
                    unsubscribe: function () {
                        this.events[event].splice(this.events[event].indexOf(listener), 1);
                    }.bind(this)
                };
            }
        };

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