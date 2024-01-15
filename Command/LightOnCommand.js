// Represents a Concrete Command [Light On]
const Command = require('./Command');

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.turnOn();
    }
}

module.exports = LightOnCommand;