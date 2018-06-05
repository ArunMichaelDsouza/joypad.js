var emmitter = {
    events: {},
    publish: function (event, data) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event].forEach(function (listener) {
                listener(data);
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
                this.events[event].splice(this.events[event].indexOf(listener), 1);
            }.bind(this)
        };
    }
};

module.exports = emmitter