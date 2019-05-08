// Helper functions

const loopGamepadInstances = callback => {
    const gamepads = window.navigator.getGamepads();

    if (Object.keys(gamepads).length) {
        Object.keys(gamepads).forEach(index => {
            const gamepad = gamepads[index];

            if (gamepad) {
                return callback(gamepad, index);
            }
        });
    }
};
const log = message => {
    if (console.warn && typeof console.warn === 'function') {
        console.warn(message);
    } else {
        console.log(message);
    }
};

export { loopGamepadInstances, log };