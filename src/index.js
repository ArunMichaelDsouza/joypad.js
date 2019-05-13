// Entry point

import './events';
import joypad from './joypad';
import { log } from './helpers';

if (window.navigator.getGamepads && typeof window.navigator.getGamepads === 'function') {
    window.joypad = joypad;
} else {
    log('Your browser does not support the Gamepad API - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API');
}