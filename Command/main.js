// Represents our Client
const Light = require('./Light');
const RemoteControl = require('./RemoteControl');
const LightOn = require('./LightOnCommand');
const LightOff = require('./LightOffCommand');
const LightOnCommand = require('./LightOnCommand');
const LightOffCommand = require('./LightOffCommand');

const roomLight = new Light();
const roomLightOn = new LightOnCommand(roomLight);
const roomLightOff = new LightOffCommand(roomLight);

// Create an instance of our invoker
const remote = new RemoteControl();

remote.setCommand(roomLightOn);
remote.pressButton();
remote.setCommand(roomLightOff);
remote.pressButton();