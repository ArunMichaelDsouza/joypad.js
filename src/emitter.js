// Events emitter

const emitter = {
    events: {},
    publish: function (event, data) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event].forEach(listener => {
                return listener(data);
            });
        }
    },
    subscribe: function (event, listener) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        this.events[event].push(listener);

        return {
            unsubscribe: function () {
                const index = this.events[event].indexOf(listener);
                if (index !== -1) this.events[event].splice(index, 1);
            }.bind(this)
        };
    }
};

export default emitter;
