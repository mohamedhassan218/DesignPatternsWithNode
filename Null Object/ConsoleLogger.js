// Concrete Class
const Logger = require('./Logger');

class ConsoleLogger extends Logger {
    log(message) {
        console.log(`[Console] ${message}`);
    }
}

module.exports = ConsoleLogger;