// Helper functions

const loopGamepadInstances = callback => {
    const gamepads = window.navigator.getGamepads();

    if (Object.keys(gamepads).length) {
        Object.keys(gamepads).forEach(index => {
            const gamepad = gamepads[index];

            if (gamepad) {
                callback(gamepad);
            }
        });
    }
};

export { loopGamepadInstances };