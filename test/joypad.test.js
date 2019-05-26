// Tests for joypad.js

import { EVENTS, AXIS_MOVEMENT_THRESHOLD } from '../src/constants';
import emitter from '../src/emitter';
import { listenToButtonEvents, listenToAxisMovements, handleButtonEvent } from '../src/events';
import { hasVibrationSupport, hasGamepadApiSupport } from '../src/helpers';
import joypad from '../src/joypad';
import loop from '../src/loop';

describe("joypad.js", () => {
    let connectEventData;
    let changedAxisMovementThreshold = 0.3;

    beforeAll(() => {
        connectEventData = { type: 'connect' };
        joypad.instances = { 0: 'Gamepad' };
    });

    test('Check data returned from emitter subscribed listener', () => {
        emitter.subscribe(EVENTS.CONNECT.ALIAS, () => {
            return connectEventData;
        });

        expect(emitter.events.connect[0].call().type === connectEventData.type).toEqual(true);
    });

    test('Check event methods', () => {
        expect(typeof listenToButtonEvents).toEqual('function');

        expect(typeof listenToAxisMovements).toEqual('function');

        expect(typeof handleButtonEvent).toEqual('function');
    });

    test('Check helper methods', () => {
        expect(hasVibrationSupport(null)).toEqual(false);

        expect(hasGamepadApiSupport()).toEqual(false);
    });

    test('Check joypad instance', () => {
        expect(joypad.loopStarted).toEqual(false);

        expect(joypad.settings.axisMovementThreshold).toEqual(AXIS_MOVEMENT_THRESHOLD);

        joypad.set({ axisMovementThreshold: changedAxisMovementThreshold });
        expect(joypad.settings.axisMovementThreshold).toEqual(changedAxisMovementThreshold);

        joypad.remove(0);
        expect(joypad.instances).toEqual({});
    });

    test('Check main loop', () => {
        expect(loop.id).toEqual(null);

        expect(typeof loop.start).toEqual('function');

        expect(typeof loop.stop).toEqual('function');
    });
});

