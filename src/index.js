; (function (w) {
    if (w.navigator.getGamepads) {
        console.log(w.navigator.getGamepads());

        w.addEventListener('gamepadconnected', function () {
            console.log('connected');
        });

        w.addEventListener('gamepaddisconnected', function () {
            console.log('disconnected');
        });
    }
})(window);