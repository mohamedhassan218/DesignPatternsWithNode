// Represents our Client
const LoggerConfigurator = require('./LoggerConfigurator');

let enableLogging = true;
const enabled = LoggerConfigurator.configureLogger(enableLogging);
enabled.log('This message will be logged.');

enableLogging = false;
const disabled = LoggerConfigurator.configureLogger(enableLogging);
disabled.log('This message will not be logged.');