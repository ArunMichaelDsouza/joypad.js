// Helper functions

const log = message => {
    if (console.warn && typeof console.warn === 'function') {
        console.warn(message);
    } else {
        console.log(message);
    }
};
const findButtonMapping = (index, mapping) => {
    let results = [];

    Object.keys(mapping).forEach(key => {
        if (mapping[key] === index) {
            results.push(key);
        } else if (Array.isArray(mapping[key]) && mapping[key].indexOf(index) !== -1) {
            results.push(key);
        }
    });

    return results;
};
const hasVibrationSupport = vibrationActuator => {
    return vibrationActuator && vibrationActuator.type && vibrationActuator.playEffect && typeof vibrationActuator.playEffect === 'function' ? true : false;
};
const hasGamepadApiSupport = () => {
    return window.navigator.getGamepads && typeof window.navigator.getGamepads === 'function' ? true : false;
};

export { log, findButtonMapping, hasVibrationSupport, hasGamepadApiSupport };