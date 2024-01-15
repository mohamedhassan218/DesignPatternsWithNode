// Represents our Client
const TrafficLightContext = require('./TrafficLightContext');
const RedState = require('./RedState');
const YellowState = require('./YelloState');
const GreenState = require('./GreenState');

const trafficLight = new TrafficLightContext();

const red = new RedState();
const yellow = new YellowState();
const green = new GreenState();

// Set initial state
trafficLight.setState(red);

// Simulate traffic light changes
trafficLight.request();

trafficLight.setState(yellow);
trafficLight.request();

trafficLight.setState(green);
trafficLight.request();

trafficLight.setState(red);
trafficLight.request(); 