// Tests for main loop

import loop from '../src/loop';

describe("loop", () => {
    test('Check main loop', () => {
        expect(loop.id).toEqual(null);

        expect(typeof loop.start).toEqual('function');

        expect(typeof loop.stop).toEqual('function');
    });
});