// Main loop

import { listenToButtonEvents } from './events';

var loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        listenToButtonEvents();
    },
    cancel: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;