// Main loop

// import { listenToButtonEvents } from './events';

const loop = {
    id: null,
    start: function () {
        this.id = window.requestAnimationFrame(this.start.bind(this));
        console.log('test');
        // listenToButtonEvents(this.id);
    },
    stop: function (id) {
        window.cancelAnimationFrame(id);
    }
};

export default loop;