// Entry point

import './events';
import joypad from './joypad';
import { log, hasGamepadApiSupport } from './helpers';

if (hasGamepadApiSupport()) {
    window.joypad = joypad;
} else {
    window.joypad = {};
    log('Your browser does not support the Gamepad API - https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API');
}