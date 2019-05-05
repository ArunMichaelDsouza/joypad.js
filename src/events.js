// Joypad events

import emmitter from './emitter';
import { EVENTS } from './constants';
import joypad from './joypad';
import loop from './loop';

window.addEventListener(EVENTS.CONNECT.NATIVE, e => {
    loop.start();
    joypad.add(e.gamepad);
    emmitter.publish(EVENTS.CONNECT.ALIAS, e);
});

window.addEventListener(EVENTS.DISCONNECT.NATIVE, e => {
    joypad.remove(e.gamepad.index);
    emmitter.publish(EVENTS.DISCONNECT.ALIAS, e);
});

// window.addEventListener(EVENTS.OTHER.BUTTON_PRESS, e => {
//     emmitter.publish(EVENTS.OTHER.BUTTON_PRESS, e);
// });

// const pressEvent = eventData => new CustomEvent(EVENTS.OTHER.BUTTON_PRESS, { detail: eventData });

// let ind = null;
// export function listenToButtonEvents(id) {
//     if ('getGamepads' in window.navigator) {
//         const gamepads = window.navigator.getGamepads();

//         if (Object.keys(gamepads).length) {
//             Object.keys(gamepads).forEach(i => {
//                 const gamepad = gamepads[i];

//                 if (gamepad) {
//                     gamepad.buttons.forEach((button, index) => {
//                         if (button.pressed) {
//                             const eventData = { button, index, gamepad };

//                             if (ind === index) {
//                                 console.log('hold')
//                             }

//                             ind = index;
//                             window.dispatchEvent(pressEvent(eventData));
//                             loop.stop(id);
//                             setTimeout(function () {
//                                 loop.start();
//                                 ind = null;
//                             }, 220);
//                         }
//                     });
//                 }
//             });
//         }
//     }
// };
