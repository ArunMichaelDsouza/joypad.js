// Tests for emitter

import { EVENTS } from '../src/constants';
import emitter from '../src/emitter';

describe("emitter", () => {
    let connectEventData;

    beforeAll(() => {
        connectEventData = { type: 'connect' };
    });

    test('Check emitter instance', () => {
        expect(emitter.events).toEqual({});

        expect(typeof emitter.publish).toEqual('function');

        expect(typeof emitter.subscribe).toEqual('function');
    });

    test('Check data returned from emitter subscribed listener', () => {
        emitter.subscribe(EVENTS.CONNECT.ALIAS, () => {
            return connectEventData;
        });

        expect(emitter.events.connect[0].call().type === connectEventData.type).toEqual(true);
    });
});