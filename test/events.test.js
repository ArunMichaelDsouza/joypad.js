// Tests for events

import { listenToButtonEvents, listenToAxisMovements, handleButtonEvent } from '../src/events';

describe("events", () => {
    test('Check event methods', () => {
        expect(typeof listenToButtonEvents).toEqual('function');

        expect(typeof listenToAxisMovements).toEqual('function');

        expect(typeof handleButtonEvent).toEqual('function');
    });
});