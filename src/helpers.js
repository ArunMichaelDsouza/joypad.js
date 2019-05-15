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
const findKeyMapping = (index, mapping) => {
    let results = [];

    Object.keys(mapping).forEach(function (key) {
        if (mapping[key] === index) {
            results.push(key);
        } else if (Array.isArray(mapping[key]) && mapping[key].indexOf(index) !== -1) {
            results.push(key);
        }
    });

    return results;
};
const hasVibrationSupport = vibrationActuator => vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function';
const hasGamepadApiSupport = () => window.navigator.getGamepads && typeof window.navigator.getGamepads === 'function';

export { loopGamepadInstances, log, findKeyMapping, hasVibrationSupport, hasGamepadApiSupport };