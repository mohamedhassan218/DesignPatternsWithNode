const CPU = require('./cpu');
const Memory = require('./Memory');
const HardDrive = require('./HardDrive');

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    startComputer() {
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log('Computer started');
    }

    shutDownComputer() {
        this.cpu.shutdown();
        this.memory.unload();
        this.hardDrive.write();
        console.log('Computer shutdown');
    }
}

module.exports = ComputerFacade;