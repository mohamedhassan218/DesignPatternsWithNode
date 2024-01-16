const ConsoleLogger = require('./ConsoleLogger');
const NullLogger = require('./nullLogger');

class LoggerConfigurator {
    static configureLogger(enableLogging) {
        return enableLogging ? new ConsoleLogger() : new NullLogger();
    }
}

module.exports = LoggerConfigurator;