// Represents State Interface
class TrafficLightState {
    handle(context) {
        throw new Error("This method should be overridden in concrete state classes");
    }
}

module.exports = TrafficLightState;