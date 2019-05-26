// Tests for joypad.js

import * as joypad from '../dist/joypad';

describe("joypad.js", () => {
    let joypad;

    beforeAll(() => {
        joypad = window.joypad;
    });

    test('Initialise', () => {
        console.log(joypad);
    });
});

