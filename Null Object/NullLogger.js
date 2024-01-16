// Represnts our Null Object
const Logger = require('./Logger');

class NullLogger extends Logger {
    // Do nothing
    log(message) { }
}

module.exports = NullLogger;