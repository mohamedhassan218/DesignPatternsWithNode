// Represents a Concrete State
const TrafficLightState = require('./TrafficLightState');

class YellowState extends TrafficLightState {
    handle(context) {
        console.log("Traffic Light is YELLOW. Prepare to stop or go please . . .");
    }
}

module.exports = YellowState;