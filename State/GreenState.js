// Represents a Concrete State
const TrafficLightState = require('./TrafficLightState');

class GreenState extends TrafficLightState {
    handle(context) {
        console.log("Traffic Light is GREEN. You can Go now :)");
    }
}

module.exports = GreenState;