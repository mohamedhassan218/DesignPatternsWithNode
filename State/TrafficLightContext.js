// Represents our Context
class TrafficLightContext {
    constructor() {
        this.state = null;
    }

    setState(state) {
        this.state = state;
    }

    request() {
        this.state.handle(this);
    }
}

module.exports = TrafficLightContext;