// Represents a Concrete State
const TrafficLightState = require('./TrafficLightState');

class RedState extends TrafficLightState {
    handle(context) {
        console.log("Traffic Light is RED. Stop please!");
    }
}

module.exports = RedState;